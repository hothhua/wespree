//import { Image } from './image';
//import { OptionValue } from './option_value';
/*
 * Product model
 * Detailed info http://guides.spreecommerce.org/developer/products.html#variants
 * Public API's http://guides.spreecommerce.org/api/variants.html
 */
const Variant = {
  id: 0,
  name: '',
  sku: '',
  price: '',
  weight: '',
  height: '',
  width: '',
  depth: '',
  is_master: false,
  slug: '',
  description: '',
  track_inventory: false,
  cost_price: '',
  option_values: [],//OptionValue[],
  total_on_hand: 0,
  display_price: '',
  options_text: '',
  in_stock: false,
  is_backorderable: false,
  is_destroyed: false,
  is_orderable: false,
  images: []
}

export default Variant;
