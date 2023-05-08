import React, { useState  } from "react"
import { HTTPOfferRepo } from "../../../infraestructure/http/OfferRepo"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ModalNegotiation(property: string, owner: string, offerer: string) {
  const [amount] = useState<number|null>(null);
  const offerRepo: HTTPOfferRepo = new HTTPOfferRepo()
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      <button
        className='font-bold  text-secondary py-4 w-52 rounded-full mx-10'
        type="button"
        onClick={() => setShowModal(true)}
      >
        Negociar
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-sm">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Iniciar negociación por la propiedad
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}>
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    Esta propiedad pertenece a otro usuario. Si deseas obtenerla, puedes
                    realizar una oferta especificando la cantidad de dinero que deseas pagar
                    por ella.
                  </p>
                  <div className="mb-3 pt-0">
                    <input id="amount" name="amount" type="number" min="0" max="999999" step="100" value={amount ?? 50000} placeholder="Cantidad" className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"></input>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      try {
                        amount !== null ? (
                          offerRepo.createOffer(property, owner, offerer, amount)
                        ) : (
                          toast.error('Error al ingresar la cantidad para la oferta', {
                            position: 'top-right',
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: 'light',
                          })
                        )
                      } catch (error) {
                        toast.error('Error al realizar la oferta', {
                          position: 'top-right',
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: 'light',
                        })
                      }
                      setShowModal(false)
                    }}
                  >
                    Realizar oferta
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}