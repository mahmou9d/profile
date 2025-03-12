import React from 'react';
import './Contact.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import doneanimation from '../../../public/animation/Animation - 1737719651152.json'

import { useForm, ValidationError } from '@formspree/react';
const Contact =() => {








    
    const [state, handleSubmit] = useForm("xwpvkwwp");
    return(
        <section id='contact' className='contact'>
            <h1 className='title'>
                <span className='icon-envelope'></span>
                Contact us</h1>
            <p className='subtitle'>Contact us for more information and Get notified when I publish
            something new.</p>
            <div className="class">
                <form onSubmit={handleSubmit} className='da'>
                    <div className='fixed'>
                    <label htmlFor="eamil">Email address</label>
                    <input autoComplete="off" required type="email" name='email' id='email' />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                    </div>

                    <div className='div'>
                    <label htmlFor="massage">your massage</label>
                    <textarea required name="massage" id="massage"></textarea>
                    <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
        />
                    </div>
                    <button className='submit' type="submit" disabled={state.submitting}>
                        {state.submitting ? "submitting" :"submit"}
                        </button>
                        {state.succeeded && (
                            <p className='p' style={{ fontSize:"20px" ,marginTop: "1.7rem"}}>
                                <DotLottieReact className='lo'
                                    src="https://lottie.host/9e9f0ca4-753d-461b-a22f-8f9c99f467db/yeOXOv9b4D.lottie"
                                    loop={false}
                                    autoplay
                                    />
                                your message has been sent successfully
                                </p>
                        )}
                </form>
                <div className='animation'>
                <DotLottieReact
                    src="https://lottie.host/14de4fbb-09d0-4a68-ad60-44083c32699f/NcBrJEQLPS.lottie"
                    loop
                    autoplay
                    />
                </div>
            </div>
            

        </section>












































            
        )
    }






export default Contact;