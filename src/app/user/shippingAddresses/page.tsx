import styles from '@/app/user/shippingAddresses/page.module.scss';
import PageTitle from '@/components/texts/PageTitle';
import ShippingAddressItem from '@/app/user/shippingAddresses/ShippingAddressItem';
import { userFetchShippingAddresses } from '@/actions/user';
import NewShippingAddress from '@/app/user/shippingAddresses/NewShippingAddress';
import { masterFetchPrefectures } from '@/actions/master';

export default async function ShippingAdressPage() {
  const { shippingAddresses } = await userFetchShippingAddresses();
  const { prefectures } = await masterFetchPrefectures();

  return (
    <div>
      <PageTitle title='お届け先' />
      <ul className={styles.list}>
        {shippingAddresses.map((shippingAddress) => (
          <li key={shippingAddress.id}>
            <ShippingAddressItem shippingAddress={shippingAddress} />
          </li>
        ))}
      </ul>
      <NewShippingAddress prefectures={prefectures} />
    </div>
  );
}