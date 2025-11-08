export const validEmail= new RegExp('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$')
export const validPhoneNo= new RegExp('^[0-9]{10}$');
export const validPassword= new RegExp('(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,}')