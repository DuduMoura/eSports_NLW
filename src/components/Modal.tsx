import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Input from "./Input";
import { Twitch } from "../services/Twitch";
import Select from "./Select";
import CheckboxWeek from "./CheckboxWeek";
import Checkbox from "./Checkbox";

export default function Modal({ open, setOpen }: any) {
  const cancelButtonRef = useRef(null);
  const [games, setGames] = useState<any>([]);
  const api = new Twitch;

  useEffect( () => {
    getGames()
  }, [])

  async function getGames() {
    let result = await api.getTopGames()
    setGames(result)
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:w-full sm:max-w-lg">
                <div className="bg-zinc-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-left w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-3xl font-bold leading-6 text-white"
                      >
                        Publique seu anúncio
                      </Dialog.Title>
                      <div className="mt-10 flex flex-wrap">
                        <Select
                          label="Qual o game"
                          placeholder="Selecione o game que deseja jogar"
                          w={12}
                          errors={[]}
                          data={games}
                        />
                        <Input 
                          label="Seu nome (ou nickname)"
                          placeholder="Como te chamam dentro do game?"
                          w={12}
                          errors={[]}
                        />
                        <Input 
                          label="Joga há quantos anos?"
                          placeholder="Tudo bem ser zero"
                          type="text"
                          w={6}
                          errors={[]}
                        />
                        <Input 
                          label="Qual seu Discord"
                          placeholder="Usuario#0000"
                          w={6}
                          errors={[]}
                        />
                        <CheckboxWeek 
                          label="Quando costuma jogar"
                          w={12}
                          errors={[]}
                        />
                        <Input 
                          label="Que horário do dia costuma jogar?"
                          placeholder="19h as 21h"
                          w={12}
                          errors={[]}
                        />
                        <Checkbox
                         value="isCheck"
                         name="Costumo me conectar no chat de voz"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-zinc-800 px-8 py-3 pb-7 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-base font-medium text-gray-200 shadow-sm focus:border-none sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                    </svg>
                    Encontrar Duo
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-500 bg-gray-500 px-4 py-2 text-base font-medium text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancelar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
