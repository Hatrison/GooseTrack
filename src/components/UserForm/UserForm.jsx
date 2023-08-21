import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/user/selectors';
import { Formik, ErrorMessage } from 'formik';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { deleteUser } from '../../redux/user/operations';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { UserValidSchema } from './UserValidSchema';
import { updateUser } from '../../redux/user/operations';
import {
  AddIcon,
  AvatarWrapper,
  ButtonWrapper,
  ControlBtn,
  FieldAdd,
  Form,
  IconStatusBox,
  ImgAvatar,
  InputInfo,
  Label,
  User,
  UserInfo,
  UserTitle,
  UserWrapper,
  WrapperForm,
} from './UserForm.styled';
import { ErrorIcon, CorrectIcon } from '../LoginForm/LoginForm.styled';
import { DatePickerStyled, PopperDateStyles } from './DatePicker.styled';
import ChangePasswordModal from 'components/ChangePasswordModal';
import { useNavigate } from 'react-router-dom';

const currentDate = dayjs(new Date()).format('YYYY/MM/DD');

const UserForm = ({ openModal }) => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlerCloseModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const [avatarURL, setAvatarURL] = useState(null);
  const [isFormChanged, setIsFormChanged] = useState(false);

  const handleSubmit = async values => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    if (values.phone) {
      formData.append('phone', values.phone);
    }
    if (values.skype) {
      formData.append('skype', values.skype);
    }
    formData.append('birthday', dayjs(values.birthday).format('YYYY/MM/DD'));

    if (avatarURL) {
      formData.append('avatar', avatarURL);
    }
    try {
      await dispatch(updateUser(formData));
      toast.success('Profile data changed successfully');
    } catch {
      toast.error('Something went wrong... Try again!');
    }
  };

  const handleDelete = () => {
    dispatch(deleteUser())
      .then(data => {
        if (data.error) {
          throw new Error(`Something went wrong`);
        }
        navigate('/', { replace: true });
      })
      .catch(error => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <WrapperForm>
        <Formik
          validationSchema={UserValidSchema}
          initialValues={{
            name: userInfo?.name || '',
            birthday: userInfo?.birthday || `${currentDate}`,
            email: userInfo?.email || '',
            phone: userInfo?.phone || '',
            skype: userInfo?.skype || '',
          }}
          onSubmit={handleSubmit}
        >
          {({
            values,
            setFieldValue,
            dirty,
            isSubmitting,
            touched,
            errors,
          }) => (
            <Form>
              <div>
                <AvatarWrapper>
                  {avatarURL ? (
                    <label htmlFor="avatar">
                      <ImgAvatar
                        src={URL.createObjectURL(avatarURL)}
                        alt="Avatar"
                      />
                    </label>
                  ) : userInfo?.avatarURL ? (
                    <label htmlFor="avatar">
                      <ImgAvatar src={userInfo?.avatarURL} alt="Avatar" />
                    </label>
                  ) : (
                    ''
                  )}
                </AvatarWrapper>
                <FieldAdd
                  id="add-avatar"
                  name="avatar"
                  type="file"
                  accept="image/*, .png,.jpg, .gif"
                  onChange={e => {
                    setAvatarURL(e.target.files[0]);
                    setIsFormChanged(true);
                  }}
                />
                <label htmlFor="add-avatar">
                  <AddIcon />
                </label>
              </div>
              <UserTitle>{userInfo.name}</UserTitle>
              <User>User</User>
              <UserWrapper>
                <UserInfo>
                  <Label
                    style={{
                      color:
                        (touched.name && errors.name && '#E74A3B') ||
                        (touched.name && !errors.name && '#3CBC81'),
                    }}
                  >
                    <p>User Name</p>
                    <IconStatusBox>
                      <InputInfo
                        name="name"
                        style={{
                          borderColor:
                            (touched.name && errors.name && '#E74A3B') ||
                            (touched.name && !errors.name && '#3CBC81'),
                        }}
                      />
                      {touched.name && errors.name && <ErrorIcon />}
                      {touched.name && !errors.name && <CorrectIcon />}
                    </IconStatusBox>
                    <ErrorMessage name="name" component="span" />
                  </Label>

                  <Label>
                    Birthday
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePickerStyled
                        name="birthday"
                        type="date"
                        slotProps={{
                          popper: {
                            sx: PopperDateStyles,
                          },
                          textField: {
                            placeholder: userInfo.birthday || `${currentDate}`,
                            // InputProps: { endAdornment: <Calendar /> },
                          },
                        }}
                        views={['year', 'month', 'day']}
                        format="YYYY/MM/DD"
                        closeOnSelect={true}
                        disableFuture={true}
                        onChange={date => {
                          if (!date) setFieldValue('birthday', '');
                          setFieldValue('birthday', date);
                        }}
                      />
                    </LocalizationProvider>
                  </Label>
                  <div>
                    <Label>
                      Email
                      <InputInfo name="email" type="email" disabled />
                      <ErrorMessage name="email" component="span" />
                    </Label>
                  </div>
                </UserInfo>

                <UserInfo>
                  <Label
                    style={{
                      color:
                        (touched.phone && errors.phone && '#E74A3B') ||
                        (touched.phone && !errors.phone && '#3CBC81'),
                    }}
                  >
                    Phone
                    <IconStatusBox>
                      <InputInfo
                        name="phone"
                        type="tel"
                        placeholder="+380XXXXXXXXX"
                        style={{
                          borderColor:
                            (touched.phone && errors.phone && '#E74A3B') ||
                            (touched.phone && !errors.phone && '#3CBC81'),
                        }}
                      />
                      {touched.phone && errors.phone && <ErrorIcon />}
                      {touched.phone && !errors.phone && <CorrectIcon />}
                    </IconStatusBox>
                    <ErrorMessage name="phone" component="span" />
                  </Label>

                  <Label
                    style={{
                      color:
                        (touched.skype && errors.skype && '#E74A3B') ||
                        (touched.skype && !errors.skype && '#3CBC81'),
                    }}
                  >
                    Skype
                    <IconStatusBox>
                      <InputInfo
                        name="skype"
                        type="text"
                        placeholder="Add a skype number"
                        style={{
                          borderColor:
                            (touched.skype && errors.skype && '#E74A3B') ||
                            (touched.skype && !errors.skype && '#3CBC81'),
                        }}
                      />
                      {touched.skype && errors.skype && <ErrorIcon />}
                      {touched.skype && !errors.skype && <CorrectIcon />}
                    </IconStatusBox>
                    <ErrorMessage name="skype" component="span" />
                  </Label>
                </UserInfo>
              </UserWrapper>

              <ButtonWrapper>
                <ControlBtn type="submit" disabled={!dirty && !isFormChanged}>
                  Save changes
                </ControlBtn>
                <ControlBtn
                  style={{ marginTop: '24px' }}
                  type="button"
                  onClick={() => handlerCloseModal()}
                >
                  Change password
                </ControlBtn>
                <ControlBtn
                  style={{ backgroundColor: '#EA3D65' }}
                  type="button"
                  onClick={() => handleDelete()}
                >
                  Delete user
                </ControlBtn>
              </ButtonWrapper>
            </Form>
          )}
        </Formik>
      </WrapperForm>
      {isModalOpen && (
        <ChangePasswordModal handlerCloseModal={handlerCloseModal} />
      )}
    </>
  );
};

export default UserForm;
