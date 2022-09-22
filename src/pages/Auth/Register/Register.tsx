import { unwrapResult } from '@reduxjs/toolkit'
import { Helmet } from 'react-helmet-async'
import { useForm, Controller } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from 'src/assets/styles/utils'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import InputPassword from 'src/components/Input/InputPassword/InputPassword'
import InputText from 'src/components/Input/InputText/InputText'
import Desktop from 'src/components/Responsive/Desktop'
import Mobile from 'src/components/Responsive/Mobile'
import Tablet from 'src/components/Responsive/Tablet'
import { path } from 'src/constants/path'
import { rules } from 'src/constants/rules'
import { register } from 'src/slice/auth/auth.slice'

import * as S from './register.style'

export default function Register() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmedPassword: ''
    }
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleRegister = async data => {
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      const res = await dispatch(register(body))
      unwrapResult(res)
      navigate(path.home)
    } catch (error) {}
  }

  return (
    <>
      <Mobile>
        <S.StyledRegister>
          <Helmet>
            <title>Đăng ký</title>
          </Helmet>

          <S.FormWrapper>
            <S.FormTitle>Đăng ký</S.FormTitle>
            <S.Form onSubmit={handleSubmit(handleRegister)} noValidate>
              <S.FormControl>
                <Controller
                  name="email"
                  control={control}
                  rules={rules.email}
                  render={({ field }) => (
                    <InputText
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={field.onChange}
                      value={getValues('email')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="email" />
              </S.FormControl>
              <S.FormControl>
                <Controller
                  name="password"
                  control={control}
                  rules={rules.password}
                  render={({ field }) => (
                    <InputPassword
                      placeholder="Mật khẩu"
                      name="password"
                      onChange={field.onChange}
                      value={getValues('password')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="password" />
              </S.FormControl>
              <S.FormControl>
                <Controller
                  name="confirmedPassword"
                  control={control}
                  rules={{
                    ...rules.confirmedPassword,
                    validate: {
                      samePassword: v =>
                        v === getValues('password') || 'Mật khẩu không khớp'
                    }
                  }}
                  render={({ field }) => (
                    <InputPassword
                      placeholder="Nhập lại mật khẩu"
                      name="confirmedPassword"
                      onChange={field.onChange}
                      value={getValues('confirmedPassword')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="confirmedPassword" />
              </S.FormControl>
              <S.FormButton>
                <Button type="submit">Đăng ký</Button>
              </S.FormButton>
            </S.Form>
            <S.FormFooter>
              <span>Bạn đã có tài khoản?</span>
              <Link
                to={path.login}
                className="link"
                style={{ color: ' #007bff' }}
              >
                Đăng nhập
              </Link>
            </S.FormFooter>
          </S.FormWrapper>
        </S.StyledRegister>
      </Mobile>

      <Tablet>
        <S.StyledRegister>
          <Helmet>
            <title>Đăng ký</title>
          </Helmet>

          <S.FormWrapper>
            <S.FormTitle>Đăng ký</S.FormTitle>
            <S.Form onSubmit={handleSubmit(handleRegister)} noValidate>
              <S.FormControl>
                <Controller
                  name="email"
                  control={control}
                  rules={rules.email}
                  render={({ field }) => (
                    <InputText
                      type="email"
                      name="email"
                      placeholder="Email"
                      onChange={field.onChange}
                      value={getValues('email')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="email" />
              </S.FormControl>
              <S.FormControl>
                <Controller
                  name="password"
                  control={control}
                  rules={rules.password}
                  render={({ field }) => (
                    <InputPassword
                      placeholder="Mật khẩu"
                      name="password"
                      onChange={field.onChange}
                      value={getValues('password')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="password" />
              </S.FormControl>
              <S.FormControl>
                <Controller
                  name="confirmedPassword"
                  control={control}
                  rules={{
                    ...rules.confirmedPassword,
                    validate: {
                      samePassword: v =>
                        v === getValues('password') || 'Mật khẩu không khớp'
                    }
                  }}
                  render={({ field }) => (
                    <InputPassword
                      placeholder="Nhập lại mật khẩu"
                      name="confirmedPassword"
                      onChange={field.onChange}
                      value={getValues('confirmedPassword')}
                    />
                  )}
                />
                <ErrorMessage errors={errors} name="confirmedPassword" />
              </S.FormControl>
              <S.FormButton>
                <Button type="submit">Đăng ký</Button>
              </S.FormButton>
            </S.Form>
            <S.FormFooter>
              <span>Bạn đã có tài khoản?</span>
              <Link
                to={path.login}
                className="link"
                style={{ color: ' #007bff' }}
              >
                Đăng nhập
              </Link>
            </S.FormFooter>
          </S.FormWrapper>
        </S.StyledRegister>
      </Tablet>

      <Desktop>
        <S.StyledRegister>
          <Helmet>
            <title>Đăng ký</title>
          </Helmet>
          <S.Container className="container">
            <S.FormWrapper>
              <S.FormTitle>Đăng ký</S.FormTitle>
              <S.Form onSubmit={handleSubmit(handleRegister)} noValidate>
                <S.FormControl>
                  <Controller
                    name="email"
                    control={control}
                    rules={rules.email}
                    render={({ field }) => (
                      <InputText
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={field.onChange}
                        value={getValues('email')}
                      />
                    )}
                  />
                  <ErrorMessage errors={errors} name="email" />
                </S.FormControl>
                <S.FormControl>
                  <Controller
                    name="password"
                    control={control}
                    rules={rules.password}
                    render={({ field }) => (
                      <InputPassword
                        placeholder="Mật khẩu"
                        name="password"
                        onChange={field.onChange}
                        value={getValues('password')}
                      />
                    )}
                  />
                  <ErrorMessage errors={errors} name="password" />
                </S.FormControl>
                <S.FormControl>
                  <Controller
                    name="confirmedPassword"
                    control={control}
                    rules={{
                      ...rules.confirmedPassword,
                      validate: {
                        samePassword: v =>
                          v === getValues('password') || 'Mật khẩu không khớp'
                      }
                    }}
                    render={({ field }) => (
                      <InputPassword
                        placeholder="Nhập lại mật khẩu"
                        name="confirmedPassword"
                        onChange={field.onChange}
                        value={getValues('confirmedPassword')}
                      />
                    )}
                  />
                  <ErrorMessage errors={errors} name="confirmedPassword" />
                </S.FormControl>
                <S.FormButton>
                  <Button type="submit">Đăng ký</Button>
                </S.FormButton>
              </S.Form>
              <S.FormFooter>
                <span>Bạn đã có tài khoản?</span>
                <Link
                  to={path.login}
                  className="link"
                  style={{ color: ' #007bff' }}
                >
                  Đăng nhập
                </Link>
              </S.FormFooter>
            </S.FormWrapper>
          </S.Container>
        </S.StyledRegister>
      </Desktop>
    </>
  )
}
