export enum StorageKey {
  role = 'role',
  account = 'account',
  username = 'username',
  sub = 'sub',
  iat = 'iat',
  exp = 'exp',
}

export enum AccountStoreKey {
  isDeleted = 'isDeleted',
  createdBy = 'createdBy',
  updatedBy = 'updatedBy',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  id = 'id',
  username = 'username',
  password = 'password',
  email = 'email',
  type = 'type',
  userId = 'userId',
  isEnabled = 'isEnabled',
  verificationCode = 'verificationCode',
  isVerified = 'isVerified',
  verificationExpiredAt = 'verificationExpiredAt'
}


export enum TokenStorageKey {
  accessToken = 'accessToken',
  expireTime = 'expireTime',
  refreshToken = 'refreshToken',
}
