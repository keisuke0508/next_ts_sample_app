'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '@/app/user/shippingAddresses/NewShippingAddress.module.scss';
import { Prefecture } from '@/models/Prefecture';
import AppButton, { AppButtonColorType } from '@/components/buttons/AppButton';
import AppModal from '@/components/modals/AppModal';
import PostalCodeForm from '@/components/forms/PostalCodeForm';
import SelectForm from '@/components/forms/SelectForm';
import TextForm from '@/components/forms/TextForm';
import { userCreateShippingAddress } from '@/actions/user';

type Props = {
  prefectures: Prefecture[];
};

export default function NewShippingAddress({ prefectures }: Props) {
  const router = useRouter();
  const [appeared, setAppeared] = useState(false);
  const showModal = () => {
    setAppeared(true);
  };
  const hideModal = () => {
    setAppeared(false);
  };

  const prefectureItems = prefectures.map(item => {
    return { key: item.id, text: item.name };
  });

  const [postalCode, setPostalCode] = useState('');
  const [prefectureId, setPrefectureId] = useState(0);
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [buildingName, setBuildingName] = useState('');
  const [name, setName] = useState('');

  const [errorMessageForPostalCode, setErrorMessageForPostalCode] = useState('');
  const [errorMessageForPrefectureId, setErrorMessageForPrefectureId] = useState('');
  const [errorMessageForCity, setErrorMessageForCity] = useState('');
  const [errorMessageForAddress, setErrorMessageForAddress] = useState('');
  const [errorMessageForName, setErrorMessageForName] = useState('');

   const createShippingAddress = async () => {
    let hasError = false;
    setErrorMessageForPostalCode('');
    setErrorMessageForPrefectureId('');
    setErrorMessageForCity('');
    setErrorMessageForAddress('');
    setErrorMessageForName('');

    if (!postalCode) {
      setErrorMessageForPostalCode('郵便番号を入力してください。');
      hasError = true;
    }
    if (!prefectureId) {
      setErrorMessageForPrefectureId('都道府県を選択してください。');
      hasError = true;
    }
    if (!city) {
      setErrorMessageForCity('市区町村を入力してください。');
      hasError = true;
    }
    if (!address) {
      setErrorMessageForAddress('町名・番地を入力してください。');
      hasError = true;
    }
    if (!name) {
      setErrorMessageForName('お名前を入力してください。');
      hasError = true;
    }
    if (hasError) return;

    try {
      const { message } = await userCreateShippingAddress(name, postalCode, prefectureId, city, address, buildingName);
      setName('');
      setPostalCode('');
      setPrefectureId(0);
      setCity('');
      setAddress('');
      setBuildingName('');
      $toast.success(message);
      router.refresh()
      hideModal();
    } catch (e) {
      if (e instanceof Error) {
        $toast.error(e.message);
      }
    }
  };

  return (
    <div>
      <div className={styles.buttonWrap}>
        <AppButton text='お届け先の追加' colorType={AppButtonColorType.Blue} onClick={showModal} />
      </div>
      {appeared && (
        <AppModal title='お届け先の追加' onClick={createShippingAddress}>
          <form className={styles.form}>
            <PostalCodeForm title='郵便番号' value={postalCode} errorMessage={errorMessageForPostalCode} onBlur={setPostalCode} />
            <SelectForm title='都道府県' items={prefectureItems} errorMessage={errorMessageForPrefectureId} onChange={setPrefectureId} />
            <TextForm title='市区町村' value={city} errorMessage={errorMessageForCity} onBlur={setCity} />
            <TextForm title='町名・番地' value={address} errorMessage={errorMessageForAddress} onBlur={setAddress} />
            <TextForm title='建物名・号室' value={buildingName} onBlur={setBuildingName} />
            <TextForm title='お名前' value={name} errorMessage={errorMessageForName} onBlur={setName} />
            <div className={styles.buttons}>
              <AppButton text='閉じる' colorType={AppButtonColorType.Gray} onClick={hideModal} />
              <AppButton text='保存' colorType={AppButtonColorType.Blue} onClick={createShippingAddress} />
            </div>
          </form>
        </AppModal>
      )}
    </div>
  );
}