//import { Variant } from './variant';
/*
 * LineItem model
 * Detailed info http://guides.spreecommerce.org/developer/orders.html#line-items
 * Public API's http://guides.spreecommerce.org/api/line_items.html
 */

 const LineItem = {
  id: 0,
  quantity: 0,
  price: 0,
  single_display_amount: 0,
  total: 0,
  display_amount: 0,
  variant_id: 0,
  variant: null//Variant;

}

export default LineItem;