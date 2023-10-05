export type TUserState = {
  name: string;
  email: string;
  birthday: string;
  phone: string;
  skype: string;
  avatarURL: string;
};

export type TUserUpdateAction = FormData & {
  name?: string;
  email?: string;
  phone?: string;
  skype?: string;
  birthday?: string;
  avatar?: string;
};

export type TUserResetPasswordAction = {
  email: string;
};
