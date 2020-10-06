import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

const mail = {
    to: "destino@mailserver.com",
    subject: "Contact via website",
    template: "template_vxdqg4r",
    service: "service_o1770tn",
    user: "user_ob7ANYoUgam3fIOOSo6f7"
}

var templateParams = {
   form_name: 'James',
   form_subject: 'Check this out!',
   form_message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, eius?',
   reply_to: 'donotreply@server.com'
};


const ContactForm = (props) => {

   const mailto = props.mailto ? props.mailto : mail.to;
   const subject = props.subject ? props.subject : mail.subject;

   const [ formState, setFormState ] = useState('form-status-none');

   const { register, handleSubmit, errors, reset } = useForm();
   const onSubmit = data => {
      setFormState('form-status-sending');
      templateParams.form_name = data.name;
      templateParams.form_subject = data.subject;
      templateParams.form_message = data.message;
      templateParams.reply_to = data.contactemail;

      emailjs.send(mail.service, mail.template, templateParams, mail.user)
	      .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setFormState('form-status-success');
            setTimeout(()=>{setFormState('form-status-none')}, 4000); // replace form status
	      }, (err) => {
            console.log('FAILED...', err);
            setFormState('form-status-error');
	   });
   };

   return(
       <>
       
        <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column contactform success'>
        <div className={formState}></div>
        <label htmlFor='name'>
           <small className='col-3'>Name</small>
           <input name='name' placeholder='Your complete name' type='text' ref={register( {required: true })} className='col' />
        </label>
        <label htmlFor='contactemail'>
           <small className='col-3'>Your email</small>
           <input name='contactemail' placeholder='Your email' type='email' ref={register( {required: true })} className='col' />
        </label>
        <label htmlFor='subject'>
           <small >Subject</small>
           <select name='subject' ref={register( {required: false })}>
               <option value='Comercial'>Comercial</option>
               <option value='Information'>Information</option>
               <option value='Business'>Business</option>
               <option value='Other'>Other</option>
           </select>
        </label>
        <label htmlFor='message'>
           <small>Your Message</small>
           <textarea name='message' placeholder='Your Message' ref={register( {required: true })}/>
        </label>
        <div className="formbuttons">
            <input type="submit" className="btn btn-primary mr-2" value="Send Mail" />
            <input type="reset" className="btn btn-danger" value="Reset" onClick={()=>reset()}/>
        </div>
     </form>
     </>
    )
}

export default ContactForm
