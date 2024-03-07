'use client'

import { useForm, SubmitHandler } from 'react-hook-form';
import styles from './form.module.scss';
import Button from '../button/Button';
import { typeInputs, typePropsForm } from '@/types/formAuth';
import { NAME_FORM } from './const/const';
import { useRouter } from 'next/navigation';


export default function FormAuth({ type }: typePropsForm) {

    const rexExpEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<typeInputs>()

    const onSubmit: SubmitHandler<typeInputs> = (data) => console.log(data)

    return <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
        <h3 className={styles.title}>{NAME_FORM[type]}</h3>
        <div className={styles.inputContainer}>
            <label className={styles.label}>Ваш email адрес</label>
            <input className={styles.input} {...register("email", { required: true, pattern: rexExpEmail })} placeholder='Введите email' />
            <p className={styles.error}>
                {(errors.email && errors.email.type === "required") && <span>Обязательное поле</span>}
                {(errors.email && errors.email.type === "pattern") && <span>Недействительный адрес</span>}
            </p>
        </div>

        <div className={styles.inputContainer}>
            <label className={styles.label}>Ваш пароль</label>
            <input className={styles.input} {...register("password", { required: true, minLength: 6 })} placeholder='Введите пароль' />
            <p className={styles.error}>
                {(errors.password && errors.password.type === "required") && <span>Обязательное поле</span>}
                {(errors.password && errors.password.type === "minLength") && <span>Минимальная длина 6 символов</span>}
            </p>
        </div>

        <div className={styles.buttonsContainer}>
            <Button type="submit">{NAME_FORM[type]}</Button>
            <a className={styles.linkPage} onClick={() => router.push(type === 'login' ? 'register' : 'login')}>
                {type === 'login' ? NAME_FORM.register : NAME_FORM.login}
            </a>
        </div>

    </form>

}