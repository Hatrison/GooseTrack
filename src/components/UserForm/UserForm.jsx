import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from '../../redux/user/selectors';
import { Formik, Field, ErrorMessage } from 'formik';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment/moment';
import { UserValidSchema } from './UserValidSchema';
import {
  AddIcon,
  AvatarWrap,
  DefaultAvatar,
  FieldAdd,
  Form,
  UserInfo,
  UserWrapper,
  Wrapper,
  WrapperForm,
} from './UserForm.styled';
import defaultAvatar from '../../images/avatar.png';

const currentDate = moment().format('DD/MM/YYYY');

const UserForm = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);

  const [avatarURL, setAvatarURL] = useState(null);

  return (
    <Formik
      validationSchema={UserValidSchema}
      initialValues={{
        name: userInfo?.name || '',
        birthday: userInfo?.birthday || `${currentDate}`,
        email: userInfo?.email || '',
        phone: userInfo?.phone || '',
        skype: userInfo?.skype || '',
      }}
      onSubmit={async values => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <WrapperForm>
          <AvatarWrap>
            <div>
              {avatarURL ? (
                <label htmlFor="avatar">
                  <img src={URL.createObjectURL(avatarURL)} alt="Avatar" />
                </label>
              ) : (
                <DefaultAvatar>
                  <img src={defaultAvatar} alt="Avatar" />
                </DefaultAvatar>
              )}
            </div>
            <FieldAdd
              id="add-avatar"
              name="avatar"
              type="file"
              accept="image/*"
              onChange={e => {
                setAvatarURL(e.target.files[0]);
              }}
            />
            <label htmlFor="add-avatar">
              <AddIcon />
            </label>
          </AvatarWrap>
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
                        placeholder: userInfo.birthday || `${currentDate}`,
                      },
                    }}
                    views={['year', 'month', 'day']}
                    format="DD/MM/YYYY"
                    closeOnSelect={true}
                    disableFuture={true}
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
    </Formik>
  );
};

export default UserForm;
