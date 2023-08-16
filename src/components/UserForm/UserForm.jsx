import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/user/selectors';
import { Formik, Field, ErrorMessage } from 'formik';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { UserValidSchema } from './UserValidSchema';
import { updateUser } from '../../redux/user/operations';
import {
  AddIcon,
  // AvatarWrap,
  AvatarWrapper,
  DefaultAvatar,
  FieldAdd,
  Form,
  // ImageAvatar,
  ImgAvatar,
  UserInfo,
  UserWrapper,
  WrapperForm,
} from './UserForm.styled';
import defaultAvatar from '../../images/avatar.png';

const currentDate = dayjs(new Date()).format('YYYY-MM-DD');

const UserForm = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);

  const [avatarURL, setAvatarURL] = useState(null);
  const [birthDate, setBirthDate] = useState(null);

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
    formData.append(
      'birthday',
      birthDate ? dayjs(birthDate).format('YYYY-MM-DD') : ''
    );
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

  return (
    <Formik
      validationSchema={UserValidSchema}
      initialValues={{
        // name: userInfo?.name || '',
        // birthday: userInfo?.birthday || `${currentDate}`,
        // email: userInfo?.email || '',
        // phone: userInfo?.phone || '',
        // skype: userInfo?.skype || '',
        name: '',
        birthday: '',
        email: '',
        phone: '',
        skype: '',
      }}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <WrapperForm>
            <AvatarWrapper>
              <ImgAvatar>
                {avatarURL ? (
                  <label htmlFor="avatar">
                    <img src={URL.createObjectURL(avatarURL)} alt="Avatar" />
                  </label>
                ) : userInfo?.avatarURL ? (
                  <label htmlFor="avatar">
                    <img src={userInfo?.avatarURL} alt="Avatar" />
                  </label>
                ) : (
                  <DefaultAvatar>
                    <img src={defaultAvatar} alt="Avatar" />
                  </DefaultAvatar>
                )}
              </ImgAvatar>
              <FieldAdd
                id="add-avatar"
                name="avatar"
                type="file"
                accept="image/*, .png,.jpg"
                onChange={e => {
                  setAvatarURL(e.target.files[0]);
                }}
              />
              <label htmlFor="add-avatar">
                <AddIcon />
              </label>
            </AvatarWrapper>
            <h1>{userInfo.name}</h1>
            <p>User</p>
            <UserWrapper>
              <UserInfo>
                <label>
                  User Name
                  <Field name="name" />
                  <ErrorMessage name="name" component="span" />
                </label>

                <label>
                  Birthday
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      name="birthday"
                      type="date"
                      slotProps={{
                        textField: {
                          // placeholder: userInfo.birthday || `${currentDate}`,
                          placeholder: `${currentDate}`,
                        },
                      }}
                      views={['year', 'month', 'day']}
                      format="YYYY-MM-DD"
                      closeOnSelect={true}
                      disableFuture={true}
                      onChange={date => {
                        if (!date) setFieldValue('birthday', '');
                        setFieldValue('birthday', date);
                        setBirthDate(date);
                      }}
                    />
                  </LocalizationProvider>
                </label>
                <div>
                  <label>
                    Email
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" component="span" />
                  </label>
                </div>
              </UserInfo>

              <UserInfo>
                <label>
                  Phone
                  <Field name="phone" type="tel" placeholder="+380XXXXXXXXX" />
                  <ErrorMessage name="phone" component="span" />
                </label>

                <label>
                  Skype
                  <Field
                    name="skype"
                    type="text"
                    placeholder="Add a skype number"
                  />
                  <ErrorMessage name="skype" component="span" />
                </label>
              </UserInfo>
            </UserWrapper>

            <button type="submit">Save changes</button>
          </WrapperForm>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
