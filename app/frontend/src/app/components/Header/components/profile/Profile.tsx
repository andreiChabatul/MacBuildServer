'use client'

import { RxAvatar } from "react-icons/rx";
import styles from './profile.module.scss';
import { useState, useRef, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Button from "@/app/components/ui/button/Button";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useRouter } from "next/navigation";
import { logout } from "@/lib/thunk/thunk.auth";


export default function Profile() {

    const profileref = useRef(null);
    const [isOpen, setIsOpen] = useState(false)
    const email = useAppSelector((state) => state.user.user.email);
    const router = useRouter();
    const dispatch = useAppDispatch();

    useClickOutside(profileref, () => setIsOpen(false));
    useEffect(() => router.push('/'), [email])

    return <div>
        <p className={styles.text} onClick={() => setIsOpen(true)} >Профиль <RxAvatar /></p>
        {isOpen && <div ref={profileref} className={styles.profileWindow}>
            <p>Профиль участника</p>
            <p>Email: <span>{email}</span> </p>
            <Button onClick={() => dispatch(logout())}>Выйти из профиля</Button>
        </div>}
    </div>
}