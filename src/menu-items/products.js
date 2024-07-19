// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const products = {
  id: 'products',
  title: 'Products',
  type: 'group',
  children: [
    {
      id: 'all-products',
      title: 'All Products',
      type: 'item',
      url: '/Products',
      icon: icons.IconTypography,
      breadcrumbs: false
    },
    {
      id: 'category',
      title: 'Category',
      type: 'item',
      url: '/Categories',
      icon: icons.IconPalette,
      breadcrumbs: false
    }
  ]
};

export default products;
