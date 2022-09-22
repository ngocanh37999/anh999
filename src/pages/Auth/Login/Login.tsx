import { useForm, Controller } from 'react-hook-form'
import ErrorMessage from 'src/components/ErrorMessage/ErrorMessage'
import { path } from 'src/constants/path'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { unwrapResult } from '@reduxjs/toolkit'
import { Helmet } from 'react-helmet-async'
import { login } from 'src/slice/auth/auth.slice'
import * as S from './login.style'
import { Button } from 'src/assets/styles/utils'
import InputText from 'src/components/Input/InputText/InputText'
import InputPassword from 'src/components/Input/InputPassword/InputPassword'
import { rules } from 'src/constants/rules'
import Mobile from 'src/components/Responsive/Mobile'
import Tablet from 'src/components/Responsive/Tablet'
import Desktop from 'src/components/Responsive/Desktop'

export default function Login() {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = async data => {
    const body = {
      email: data.email,
      password: data.password
    }
    try {
      await dispatch(login(body)).unwrapResult()
      navigate(path.home)
    } catch (error: any) {}
  }
  return (
    <>
      <Mobile>
        <S.StyledRegister>
          <Helmet>
            <title>Đăng nhập</title>
          </Helmet>
          {/* <S.Container className="container"> */}
          <S.FormWrapper>
            <S.FormTitle>Đăng Nhập</S.FormTitle>
            <S.Form onSubmit={handleSubmit(handleLogin)} noValidate>
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
              <S.FormButton>
                <Button type="submit">Đăng nhập</Button>
              </S.FormButton>
            </S.Form>
            <S.FormFooter>
              <span>Bạn mới biết đến MyShop?</span>
              <Link
                to={path.register}
                className="link"
                style={{ color: ' #007bff' }}
              >
                Đăng ký
              </Link>
            </S.FormFooter>
          </S.FormWrapper>
          {/* </S.Container> */}
        </S.StyledRegister>
      </Mobile>

      <Tablet>
        <S.StyledRegister>
          <Helmet>
            <title>Đăng nhập</title>
          </Helmet>
          {/* <S.Container className="container"> */}
          <S.FormWrapper>
            <S.FormTitle>Đăng Nhập</S.FormTitle>
            <S.Form onSubmit={handleSubmit(handleLogin)} noValidate>
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
              <S.FormButton>
                <Button type="submit">Đăng nhập</Button>
              </S.FormButton>
            </S.Form>
            <S.FormFooter>
              <span>Bạn mới biết đến MyShop?</span>
              <Link
                to={path.register}
                className="link"
                style={{ color: ' #007bff' }}
              >
                Đăng ký
              </Link>
            </S.FormFooter>
          </S.FormWrapper>
          {/* </S.Container> */}
        </S.StyledRegister>
      </Tablet>

      <Desktop>
        <S.StyledRegister>
          <Helmet>
            <title>Đăng nhập</title>
          </Helmet>
          <S.Container className="container">
            <S.FormWrapper>
              <S.FormTitle>Đăng Nhập</S.FormTitle>
              <S.Form onSubmit={handleSubmit(handleLogin)} noValidate>
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
                <S.FormButton>
                  <Button type="submit">Đăng nhập</Button>
                </S.FormButton>
              </S.Form>
              <S.FormFooter>
                <span>Bạn mới biết đến MyShop?</span>
                <Link
                  to={path.register}
                  className="link"
                  style={{ color: ' #007bff' }}
                >
                  Đăng ký
                </Link>
              </S.FormFooter>
            </S.FormWrapper>
          </S.Container>
        </S.StyledRegister>
      </Desktop>
    </>
  )
}
