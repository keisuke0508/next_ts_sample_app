import styles from '@/app/user/shippingAddresses/ShippingAddressItem.module.scss';
import { ShippingAddress } from '@/models/ShippingAddress';
import DeleteShippingAddressButton from '@/app/user/shippingAddresses/DeleteShippingAddressButton';

type Props = {
  shippingAddress: ShippingAddress;
};

export default function ShippingAddressItem({ shippingAddress }: Props) {  
  return (
    <div className={styles.root}>
      <div className={styles.shippingAddress}>
        <p className={styles.postalCode}>〒{shippingAddress.postalCode}</p>
        <p className={styles.address}>{shippingAddress.city}{shippingAddress.address} {shippingAddress.buildingName}</p>
        <p className={styles.name}>{shippingAddress.name}</p>
      </div>
      <DeleteShippingAddressButton shippingAddressId={shippingAddress.id} />
    </div>
  );
}