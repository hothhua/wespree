/*
 * Order model
 * Detailed info http://guides.spreecommerce.org/developer/orders.html
 * Public API's http://guides.spreecommerce.org/api/orders.html
 */

//import { LineItem } from './line_item';
//import { Address } from './address';
//import { Payment } from './payment';

const Order = {
  id: 0,
  number: '',
  item_total: '',
  total: '',
  ship_total: '',
  state: '',
  adjustment_total: '',
  user_id: '',
  created_at: '',
  updated_at: '',
  completed_at: '',
  payment_total: '',
  shipment_state: '',
  payment_state: '',
  email: '',
  special_instructions: '',
  channel: '',
  included_tax_total: '',
  additional_tax_total: '',
  display_included_tax_total: '',
  display_additional_tax_total: '',
  tax_total: '',
  currency: '',
  considered_risky: boolean;
  canceler_id: '',
  total_quantity: '',
  token: '',
  bill_address: [],//[Address];
  ship_address: [],//[Address];
  line_items: [],//[LineItem];
  payments: []//[Payment];
}

export default Order;
// NOTE: This just mimics the serializer exposed in the API
// Not sure if it is required, review it in APRIL
const LightOrder = {
  number: 0,
  payment_state: '',
  completed_at: '',
  state: '',
  total: '',
  shipment_state: ''
}

export default LightOrder;