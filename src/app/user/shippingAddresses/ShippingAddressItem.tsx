import styles from '@/app/user/shippingAddresses/ShippingAddressItem.module.scss';
import { ShippingAddress } from '@/models';
import ShippingAddressButtons from '@/app/user/shippingAddresses/ShippingAddressButtons';

type Props = {
  shippingAddress: ShippingAddress;
  hideUI: boolean;
};

export default function ShippingAddressItem({ shippingAddress, hideUI = false }: Props) {  
  return (
    <div className={`${styles.root} ${shippingAddress.isSelected ? styles.selected : ''}`}>
      <div className={styles.shippingAddress}>
        <p className={styles.postalCode}>〒{shippingAddress.postalCode}</p>
        <p className={styles.address}>{shippingAddress.prefecture.name}{shippingAddress.city}{shippingAddress.address} {shippingAddress.buildingName}</p>
        <p className={styles.name}>{shippingAddress.name}</p>
      </div>
      <ShippingAddressButtons id={shippingAddress.id} hideUI={hideUI} />
    </div>
  );
}