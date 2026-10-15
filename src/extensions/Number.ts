import { PaymentType, PokemonType } from '@/types';

declare global {
  interface Number {
    formatPrice(): string;
    pokemonTypeForJapanese(): string;
    paymentTypeForJapanese(): string;
  }
}

Number.prototype.formatPrice = function() {
  return `¥${this.toLocaleString()}`;
}

Number.prototype.pokemonTypeForJapanese = function() {
  switch (this.valueOf()) {
    case PokemonType.Normal:
      return 'ノーマル';
    case PokemonType.Fire:
      return 'ほのお';
    case PokemonType.Water:
      return 'みず';
    case PokemonType.Electric:
      return 'でんき';
    case PokemonType.Grass:
      return 'くさ';
    case PokemonType.Ice:
      return 'こおり';
    case PokemonType.Fighting:
      return 'かくとう';
    case PokemonType.Poison:
      return 'どく';
    case PokemonType.Ground:
      return 'じめん';
    case PokemonType.Flying:
      return 'ひこう';
    case PokemonType.Psychic:
      return 'エスパー';
    case PokemonType.Bug:
      return 'むし';
    case PokemonType.Rock:
      return 'いわ';
    case PokemonType.Ghost:
      return 'ゴースト';
    case PokemonType.Dragon:
      return 'ドラゴン';
    case PokemonType.Dark:
      return 'あく';
    case PokemonType.Steel:
      return 'はがね';
    case PokemonType.Fairy:
      return 'フェアリー';
    default:
      return '';
  }
}

Number.prototype.paymentTypeForJapanese = function() {
  switch (this.valueOf()) {
    case PaymentType.Card:
      return 'クレジットカード';
    case PaymentType.Paidy:
      return 'Paidy';
    case PaymentType.ApplePay:
      return 'ApplePay';
    case PaymentType.PayPal:
      return 'PayPal';
    case PaymentType.Bank:
      return '銀行振込'
    case PaymentType.ConvenienceStore:
      return 'コンビニ決済';
    case PaymentType.COD:
      return '代引き'
    default:
      return ''
  }
};

export {}
