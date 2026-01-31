import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import toast from 'react-hot-toast';
import TextField from './TextField';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        mode: "onTouched",
    });

    const registerHandler = async (data) => {
        setLoader(true);
        try {
            const { data: response } = await api.post(
                "/api/auth/public/register",
                data
            );
            reset();
            navigate("/login");
            toast.success("Registeration Successful!")
        } catch (error) {
            console.log(error);
            toast.error("Registeration Failed!")
        } finally {
            setLoader(false);
        }
    };

    return (
        <div className='min-h-[calc(100vh-64px)] bg-gradient-to-br from-slate-50 via-blue-50 to-yellow-50 flex justify-center items-center p-4'>
            <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-3xl blur-lg opacity-20"></div>

                <form
                    onSubmit={handleSubmit(registerHandler)}
                    className="relative sm:w-[450px] w-[360px] bg-white/80 backdrop-blur-xl shadow-2xl py-12 sm:px-12 px-8 rounded-3xl border border-gray-200">
                    <h1 className="text-center font-bold text-4xl mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-yellow-500 to-yellow-600">
                        Join PocketLink
                    </h1>
                    <p className="text-center text-gray-600 mb-8">Create your account to get started</p>

                    <div className="flex flex-col gap-3">
                        <TextField
                            label="UserName"
                            required
                            id="username"
                            type="text"
                            message="*Username is required"
                            placeholder="Type your username"
                            register={register}
                            errors={errors}
                        />

                        <TextField
                            label="Email"
                            required
                            id="email"
                            type="email"
                            message="*Email is required"
                            placeholder="Type your email"
                            register={register}
                            errors={errors}
                        />

                        <TextField
                            label="Password"
                            required
                            id="password"
                            type="password"
                            message="*Password is required"
                            placeholder="Type your password"
                            register={register}
                            min={6}
                            errors={errors}
                        />
                    </div>

                    <button
                        disabled={loader}
                        type='submit'
                        className='bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 font-semibold text-white w-full py-4 transition-all duration-300 rounded-2xl my-6 shadow-lg hover:shadow-xl transform hover:scale-105'>
                        {loader ? "Creating account..." : "Create Account"}
                    </button>

                    <p className='text-center text-sm text-gray-600 mt-6'>
                        Already have an account?
                        <Link
                            className='font-semibold text-pink-600 hover:text-pink-700 ml-1 transition-colors duration-200'
                            to="/login">
                            Sign in
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default RegisterPage