/**
 * User model
 * Basically mimics the UserSerializer in the API.
 */

//import { Address } from './address';

const  Authenticate = {
  name: '',
  email: '',
  password: ''
}
const  User = {
  id: '',
  uid: '',
  spree_api_key: '',
  email: '',
  created_at: '',
  updated_at: '',
  bill_address_id: '',
  ship_address_id: '',
  payment_sources: [],
  bill_address: [],//[Address];
  ship_address: [],//[Address];
  error: {error: '', errors: ''},
  access_token: '',
  client: ''
}
