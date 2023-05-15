import React, { FC, useState  } from "react"
import { HTTPOfferRepo } from "../../../infraestructure/http/OfferRepo"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface modalWindow {
  property: string, 
  owner: string, 
  offerer: string
}

const ModalNegotiation: FC<modalWindow> = ({ property, owner, offerer }) => {
  const [amount, setAmount]  = useState<number>(50000);
  const offerRepo: HTTPOfferRepo = new HTTPOfferRepo()
  const [showModal, setShowModal] = React.useState(false)
  return (
    <>
      <button
        className='font-bold bg-primary text-secondary py-4 w-52 rounded-full mx-10'
        type="button"
        onClick={() => setShowModal(true)}
      >
        Negociar
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative bg-nord4 w-auto my-6 mx-auto max-w-sm">
              <div className="border-0 rounded-lg bg-white shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-2xl text-primary font-bold">
                    Negociación por la propiedad
                  </h3>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="my-4 font-bold text-primary text-slate-500 text-md leading-relaxed">
                    Esta propiedad ya pertenece a otro usuario.
                    Si deseas obtenerla, puedes realizar una oferta indicando la cantidad de dinero que deseas pagar por ella.
                  </p>
                  <div className="mb-3 pt-0">
                    <input id="amount" name="amount" type="number" min="0" max="999999" step="100" value={amount ?? '50000'} onChange={ (event) => { 
                        const quantity = parseInt(event.target.value)
                        setAmount(quantity)
                      }
                    }placeholder="Cantidad" className="px-2 py-1 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"></input>
                  </div>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="font-bold bg-primary text-secondary py-2 w-52   rounded-full mx-10"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                  <button
                    className="font-bold bg-primary text-secondary py-2 w-52   rounded-full mx-10"
                    type="button"
                    onClick={() => {
                      try {
                        offerRepo.createOffer(property, owner, offerer, amount)
                        toast('Oferta realizada con éxito', {
                          position: 'top-right',
                          autoClose: 5000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: 'light',
                        })
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

export { ModalNegotiation }