import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'
import { toast } from 'sonner'
import SuccessToast from '../components/SuccessToast'
import FormLoader from '../components/FormLoader'
import FormError from '../components/FormError'
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Contact = () => {
  const [name, setname] = useState<string>('')
  const [email, setemail] = useState<string>('')
  const [subject, setsubject] = useState<string>('')
  const [message, setmessage] = useState<string>('')
  const [isLoading, setisLoading] = useState(false)
  const [errMsg, seterrMsg] = useState('')

  const sendEmail = async () => {
    seterrMsg('')
    setisLoading(true)

    if (!name || name == '') {
      setisLoading(false)
      return seterrMsg('Veuillez saisir votre nom complet')
    }

    if (!email || email == '') {
      setisLoading(false)
      return seterrMsg('Veuillez saisir votre email')
    }

    if (!subject || subject == '') {
      setisLoading(false)
      return seterrMsg('Veuillez saisir le sujet de votre message')
    }

    if (!message || message == '') {
      setisLoading(false)
      return seterrMsg('Veuillez saisir votre message')
    }

    setTimeout(function () {
      setname('')
      setemail('')
      setmessage('')
      setisLoading(false) // body
      return toast(<SuccessToast message={'Message envoyé avec succès.'} />)
    }, 4000)
  }
  return (
    <div id="contact">
      <div className="text-slate-100 py-16 px-4 md:px-[2rem] lg:px-[4rem] text-lg">
        <p className="text-sky-900 text-center pb-4 font-bold text-2xl md:text-3xl">
          {'Contactez-moi'}
        </p>
        <p className="text-slate-600 text-base text-center pb-4">
          {
            "N'hésitez pas à me contacter via le formulaire ci-dessous ou à travers  mes profils sur les réseaux sociaux."
          }
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
          <div className="">
            <form
              action=""
              className="bg-slate-200 p-5 rounded-lg text-slate-700 space-y-4 "
            >
              <h3 className="text-xl lg:text-2xl font-bold text-slate-700 text-center">
                {' '}
                {'Envoyez-moi un message'}{' '}
              </h3>
              <div className="space-y-1">
                <label className="font-medium text-slate-700">
                  {' '}
                  {'Nom et Prénom(s)'}{' '}
                </label>
                <Input
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Ex: Jean BIDON"
                  type="text"
                  className=" focus-visible:outline-sky-500"
                />
              </div>
              <div className="space-y-1">
                <label className="font-medium text-slate-700">
                  {' '}
                  {'Email'}{' '}
                </label>
                <Input
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  placeholder="Ex: jean@example.com"
                  type="email"
                  className=" focus-visible:outline-sky-500"
                />
              </div>
              <div className="space-y-1">
                <label className="font-medium text-slate-700">
                  {' '}
                  {'Sujet'}{' '}
                </label>
                <Input
                  value={subject}
                  onChange={(e) => setsubject(e.target.value)}
                  placeholder="Votre sujet"
                  type="texte"
                  className=" focus-visible:outline-sky-500"
                />
              </div>
              <div className="space-y-1">
                <label className="font-medium text-slate-700">
                  {' '}
                  {'Message'}{' '}
                </label>
                <Textarea
                  value={message}
                  onChange={(e) => setmessage(e.target.value)}
                  disabled={isLoading}
                  placeholder="Votre message"
                  className=" focus-visible:outline-sky-500"
                />
              </div>
              <FormError message={errMsg} />
              <Button
                onClick={(e) => {
                  e.preventDefault()
                  sendEmail()
                }}
                className="bg-sky-600 w-full space-x-4"
              >
                {isLoading && <FormLoader />}
                <p> {'Envoyer'}</p>
              </Button>
            </form>
          </div>

          <div className="text-sky-900 flex flex-col justify-center items-center space-y-6 lg:space-y-10 pt-4 lg:pt-0 text-center lg:text-start ">
            <p className=" text-3xl md:text-4xl font-bold">
              {'Informations de Contact'}{' '}
            </p>
            <div className="text-lg md:text-2xl text-opacity-50">
              <span className="font-medium">{'Email: '} </span>{' '}
              <span>{'purocawork@gmail.com'} </span>
            </div>
            <div className="text-lg md:text-2xl text-opacity-50">
              <span className="font-medium">{'Téléphone: '} </span>{' '}
              <span>{'(+229) 912 253 43 | 409 247 11'} </span>
            </div>
            <div className="text-5xl flex space-x-4">
              <Link target="_blank" to={'https://github.com/Puroca'}>
                <FaGithub />
              </Link>
              <Link
                className="text-sky-600"
                target="_blank"
                to={'https://linkedin.com/in/rocher-aihounda-583698300'}
              >
                <FaLinkedin />
              </Link>
              <Link
                className="text-green-600"
                target="_blank"
                to={'https://wa.me/+22991225343'}
              >
                <FaWhatsapp />
              </Link>
              <Link
                className="text-sky-600"
                target="_blank"
                to={'https://web.facebook.com/profile.php?id=100082296141255'}
              >
                <FaFacebook />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
