import { PokemonType } from '@/types/PokemonType';

declare global {
  interface Number {
    formatPrice(): string;
    pokemonTypeForJapanese(): string;
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

export {}
