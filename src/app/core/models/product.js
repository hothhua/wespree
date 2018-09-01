/*
 * Product model
 * Detailed info http://guides.spreecommerce.org/developer/products.html
 * Public API's http://guides.spreecommerce.org/api/products.html
 */

//import { OptionType } from './option_type';
//import { Classification } from './classification';
//import { ProductProperty } from './product_property';
//import { Variant } from './variant';

const Product = {
  id: 0,
  name: '',
  description: '',
  price: '',
  display_price: '',
  available_on: '',
  slug: '',
  // meta_title: '',             // meta title is present in schema but it is not returned by the spree Api.
  is_favorited_by_current_user: false,
  meta_description: '',
  meta_keywords: '',
  shipping_category_id: 0,
  taxon_ids: [],
  total_on_hand: 0,
  has_variants: false,
  master: null,//Variant;
  variants: null,//Variant[];
  option_types: [],//OptionType[];
  product_properties: [],//ProductProperty[];
  classifications: [],//Classification[];
  avg_rating: 0,
  reviews_count: 0,
  product_url: ''
}
