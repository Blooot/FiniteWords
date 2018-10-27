function shuffle(array) {
  var i = array.length,
      j = 0,
      temp;

  while (i--) {

      j = Math.floor(Math.random() * (i+1));

      // swap random element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;

  }

  return array;
}

const kanji = [
    {
      "kanji": "会う",
      "kana": "あう",
      "primary": "to meet",
      "secondary": "to encounter",
      "pos": "v5u, vi",
      "": ""
    },
    {
      "kanji": "青",
      "kana": "あお",
      "primary": "blue",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "青",
      "kana": "あお",
      "primary": "green",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "青",
      "kana": "あお",
      "primary": "green light",
      "secondary": "",
      "pos": "abbr",
      "": ""
    },
    {
      "kanji": "青",
      "kana": "あお~",
      "primary": "immature",
      "secondary": "unripe, young",
      "pos": "pref",
      "": ""
    },
    {
      "kanji": "青い",
      "kana": "あおい",
      "primary": "blue",
      "secondary": "green",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "青い",
      "kana": "あおい",
      "primary": "pale",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "青い",
      "kana": "あおい",
      "primary": "unripe",
      "secondary": "inexperienced",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "赤",
      "kana": "あか",
      "primary": "red",
      "secondary": "crimson, scarlet",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "赤",
      "kana": "あか",
      "primary": "Red-containing color (e.g. brown, pink, orange)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "赤",
      "kana": "あか",
      "primary": "red light",
      "secondary": "",
      "pos": "abbr",
      "": ""
    },
    {
      "kanji": "赤い",
      "kana": "あかい",
      "primary": "red",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "明い",
      "kana": "あかるい",
      "primary": "bright",
      "secondary": "colorful",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "明い",
      "kana": "あかるい",
      "primary": "cheerful",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "明い",
      "kana": "あかるい",
      "primary": "familiar (with)",
      "secondary": "knowledgeable (about)",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "秋",
      "kana": "あき",
      "primary": "autumn",
      "secondary": "fall",
      "pos": "N-t",
      "": ""
    },
    {
      "kanji": "開く",
      "kana": "あく",
      "primary": "to open (e.g. doors)",
      "secondary": "",
      "pos": "v5k, vi",
      "": ""
    },
    {
      "kanji": "開く",
      "kana": "あく",
      "primary": "to open (e.g. business, etc...)",
      "secondary": "",
      "pos": "v5k, vi",
      "": ""
    },
    {
      "kanji": "開く",
      "kana": "あく",
      "primary": "to be empty",
      "secondary": "",
      "pos": "v5k, vi",
      "": ""
    },
    {
      "kanji": "開く",
      "kana": "あく",
      "primary": "to be vacant, to be available",
      "secondary": "",
      "pos": "v5k, vi",
      "": ""
    },
    {
      "kanji": "開ける",
      "kana": "あける",
      "primary": "to open (a door, etc...)",
      "secondary": "to unwrap (e.g. parcel)",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "開ける",
      "kana": "あける",
      "primary": "to open (for business, etc...)",
      "secondary": "",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "開ける",
      "kana": "あける",
      "primary": "to empty",
      "secondary": "to clear out",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "上げる",
      "kana": "あげる",
      "primary": "to give",
      "secondary": "",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "上げる",
      "kana": "あげる",
      "primary": "to raise",
      "secondary": "to elevate",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "上げる",
      "kana": "あげる",
      "primary": "to fly (a kite, etc...)",
      "secondary": "to launch (fireworks, etc...), to surface (a submarine, etc...)",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "朝",
      "kana": "あさ",
      "primary": "morning",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "朝御飯",
      "kana": "あさごはん",
      "primary": "breakfast",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "あさって, みょうごにち",
      "kana": "あさって, みょうごにち",
      "primary": "day after tomorrow",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "足",
      "kana": "あし",
      "primary": "foot",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "足",
      "kana": "あし",
      "primary": "leg",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "足",
      "kana": "あし",
      "primary": "gait",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "足",
      "kana": "あし",
      "primary": "pace",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "明日",
      "kana": "あした, あす, みょうにち",
      "primary": "tomorrow",
      "secondary": "",
      "pos": "N-t",
      "": ""
    },
    {
      "kanji": "あそこ",
      "kana": "あそこ",
      "primary": "over there",
      "secondary": "there, that place, yonder",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "遊ぶ",
      "kana": "あそぶ",
      "primary": "to play",
      "secondary": "to make a visit (esp. for pleasure)",
      "pos": "v5b, vi",
      "": ""
    },
    {
      "kanji": "遊ぶ",
      "kana": "あそぶ",
      "primary": "to be idle",
      "secondary": "to do nothing",
      "pos": "v5b, vi",
      "": ""
    },
    {
      "kanji": "暖かい",
      "kana": "あたたかい",
      "primary": "warm (usu. Air temperature)",
      "secondary": "mild, genial",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "頭",
      "kana": "あたま",
      "primary": "head",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "頭",
      "kana": "あたま",
      "primary": "mind",
      "secondary": "brain, intellect",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "頭",
      "kana": "あたま",
      "primary": "top",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "新しい",
      "kana": "あたらしい",
      "primary": "new",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "あちら, あっち",
      "kana": "あちら, あっち",
      "primary": "over there",
      "secondary": "that way, yonder",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "あちら, あっち",
      "kana": "あちら, あっち",
      "primary": "that one",
      "secondary": "that",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "あちら, あっち",
      "kana": "あちら, あっち",
      "primary": "that person",
      "secondary": "",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "暑い",
      "kana": "あつい",
      "primary": "hot (weather, etc...)",
      "secondary": "warm",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "熱い",
      "kana": "あつい",
      "primary": "hot (thing)",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "厚い",
      "kana": "あつい",
      "primary": "kind",
      "secondary": "cordial, warm (hearted), serious, faithful",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "厚い",
      "kana": "あつい",
      "primary": "thick",
      "secondary": "deep, heavy",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "厚い",
      "kana": "あつい",
      "primary": "abundant",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "後",
      "kana": "あと",
      "primary": "behind",
      "secondary": "rear",
      "pos": "n, adj-no",
      "": ""
    },
    {
      "kanji": "後",
      "kana": "あと",
      "primary": "after",
      "secondary": "later",
      "pos": "n, adj-no",
      "": ""
    },
    {
      "kanji": "後",
      "kana": "あと",
      "primary": "descendant",
      "secondary": "successor, heir",
      "pos": "n, adj-no",
      "": ""
    },
    {
      "kanji": "あなた",
      "kana": "あなた",
      "primary": "you (referring to someone of equal or lower status)",
      "secondary": "",
      "pos": "n, uk, pol",
      "": ""
    },
    {
      "kanji": "あなた",
      "kana": "あなた",
      "primary": "dear (what a wife calls a husband)",
      "secondary": "",
      "pos": "n, uk, pol",
      "": ""
    },
    {
      "kanji": "兄",
      "kana": "あに",
      "primary": "older brother",
      "secondary": "elder brother",
      "pos": "n, hum",
      "": ""
    },
    {
      "kanji": "姉",
      "kana": "あね",
      "primary": "older sister",
      "secondary": "elder sister",
      "pos": "n, hum",
      "": ""
    },
    {
      "kanji": "あの",
      "kana": "あの",
      "primary": "that (someone or something distant from both speaker and listener, or situation unfamiliar to both speaker and listener)",
      "secondary": "",
      "pos": "Adj-pn, uk",
      "": ""
    },
    {
      "kanji": "あの, あのう, あのー",
      "kana": "あの, あのう, あのー",
      "primary": "um...",
      "secondary": "say, well, err... (hesitation sound)",
      "pos": "int, uk",
      "": ""
    },
    {
      "kanji": "アパート",
      "kana": "アパート",
      "primary": "apartment",
      "secondary": "(abbreviation for) アパートメント",
      "pos": "abbr",
      "": ""
    },
    {
      "kanji": "アパート",
      "kana": "アパート",
      "primary": "apartment house",
      "secondary": "apartment block, apartment building, (abbreviation for) アパートメントハウス",
      "pos": "abbr",
      "": ""
    },
    {
      "kanji": "あびる",
      "kana": "あびる",
      "primary": "to bathe",
      "secondary": "to bask in the sun, to shower",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "危ない",
      "kana": "あぶない",
      "primary": "dangerous",
      "secondary": "hazardous, perilous",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "危ない",
      "kana": "あぶない",
      "primary": "in danger",
      "secondary": "in jeopardy, critical, grave, at risk",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "危ない",
      "kana": "あぶない",
      "primary": "uncertain",
      "secondary": "unreliable",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "甘い",
      "kana": "あまい",
      "primary": "sweet",
      "secondary": "delicious",
      "pos": "exp, adj-i, uk",
      "": ""
    },
    {
      "kanji": "あまり, あんまり",
      "kana": "あまり, あんまり",
      "primary": "remainder",
      "secondary": "rest, balance, remains, scraps, residue, remnant",
      "pos": "Na-adj, adv, n, n-suf, uk",
      "": ""
    },
    {
      "kanji": "あまり, あんまり",
      "kana": "あまり, あんまり",
      "primary": "not very (with negative sentence)",
      "secondary": "not much",
      "pos": "adv",
      "": ""
    },
    {
      "kanji": "雨",
      "kana": "あめ",
      "primary": "rain",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "飴",
      "kana": "あめ",
      "primary": "(hard) candy",
      "secondary": "toffee",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "洗う",
      "kana": "あらう",
      "primary": "to wash",
      "secondary": "",
      "pos": "v5u, vt",
      "": ""
    },
    {
      "kanji": "洗う",
      "kana": "あらう",
      "primary": "to investigate",
      "secondary": "",
      "pos": "v5u, vt",
      "": ""
    },
    {
      "kanji": "ある",
      "kana": "ある",
      "primary": "to be (usually for inanimate objects)",
      "secondary": "to exist, to live",
      "pos": "V5r-i, vi, uk",
      "": ""
    },
    {
      "kanji": "ある",
      "kana": "ある",
      "primary": "to have",
      "secondary": "",
      "pos": "V5r-i, vi, uk",
      "": ""
    },
    {
      "kanji": "ある",
      "kana": "ある",
      "primary": "to be located",
      "secondary": "",
      "pos": "V5r-i, vi, uk",
      "": ""
    },
    {
      "kanji": "歩く",
      "kana": "あるく",
      "primary": "to walk",
      "secondary": "",
      "pos": "v5k, vi",
      "": ""
    },
    {
      "kanji": "あれ",
      "kana": "あれ",
      "primary": "that",
      "secondary": "(indicating sth away from both speaker and listener, or sth understood between listener and speaker without mentioning it)",
      "pos": "",
      "": ""
    },
    {
      "kanji": "良い",
      "kana": "いい/よい",
      "primary": "good",
      "secondary": "excellent, fine, nice, pleasant, agreeable",
      "pos": "Adj-i, uk",
      "": ""
    },
    {
      "kanji": "いいえ",
      "kana": "いいえ",
      "primary": "no",
      "secondary": "nay, well",
      "pos": "int, uk",
      "": ""
    },
    {
      "kanji": "言う",
      "kana": "いう",
      "primary": "to say",
      "secondary": "",
      "pos": "v5u, vi",
      "": ""
    },
    {
      "kanji": "言う",
      "kana": "いう",
      "primary": "to call (i.e. to give a name)",
      "secondary": "",
      "pos": "v5u, vi",
      "": ""
    },
    {
      "kanji": "家",
      "kana": "いえ",
      "primary": "house",
      "secondary": "residence, dwelling",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "家",
      "kana": "いえ",
      "primary": "Family",
      "secondary": "household",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "家",
      "kana": "いえ",
      "primary": "lineage",
      "secondary": "family name",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "行く",
      "kana": "いく",
      "primary": "to go",
      "secondary": "",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "行く",
      "kana": "いく",
      "primary": "to proceed",
      "secondary": "to take place",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "行く",
      "kana": "いく",
      "primary": "to continue",
      "secondary": "",
      "pos": "Aux-v",
      "": ""
    },
    {
      "kanji": "いくつ",
      "kana": "いくつ",
      "primary": "how many?",
      "secondary": "",
      "pos": "adv, uk",
      "": ""
    },
    {
      "kanji": "いくつ",
      "kana": "いくつ",
      "primary": "how old?",
      "secondary": "",
      "pos": "adv, uk",
      "": ""
    },
    {
      "kanji": "いくら",
      "kana": "いくら",
      "primary": "how much?",
      "secondary": "how many?",
      "pos": "adv, n",
      "": ""
    },
    {
      "kanji": "池",
      "kana": "いけ",
      "primary": "pond",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "医者",
      "kana": "いしゃ",
      "primary": "(medical) doctor",
      "secondary": "physician",
      "pos": "n, sens",
      "": ""
    },
    {
      "kanji": "椅子",
      "kana": "いす",
      "primary": "chair",
      "secondary": "stool",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "椅子",
      "kana": "いす",
      "primary": "post",
      "secondary": "office, position",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "忙しい",
      "kana": "いそがしい",
      "primary": "busy",
      "secondary": "hectic, occupied, engaged",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "痛い",
      "kana": "いたい",
      "primary": "painful",
      "secondary": "sore",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "一",
      "kana": "いち",
      "primary": "one",
      "secondary": "",
      "pos": "n, num",
      "": ""
    },
    {
      "kanji": "～一",
      "kana": "～いち",
      "primary": "best in",
      "secondary": "the most (…) in (where an adjective follows)",
      "pos": "suf",
      "": ""
    },
    {
      "kanji": "一日",
      "kana": "いちにち",
      "primary": "(the) first (of the month)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "一日",
      "kana": "いちにち",
      "primary": "one day",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "一番",
      "kana": "いちばん",
      "primary": "best",
      "secondary": "first, number one",
      "pos": "N-adv",
      "": ""
    },
    {
      "kanji": "いつ",
      "kana": "いつ",
      "primary": "when",
      "secondary": "how soon",
      "pos": "Adv-na, n, uk",
      "": ""
    },
    {
      "kanji": "五日",
      "kana": "いつか",
      "primary": "five days",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "五日",
      "kana": "いつか",
      "primary": "fifth day",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "一緒",
      "kana": "いっしょ",
      "primary": "together",
      "secondary": "meeting, company",
      "pos": "adv, n",
      "": ""
    },
    {
      "kanji": "五つ",
      "kana": "いつつ",
      "primary": "five",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "いつも",
      "kana": "いつも",
      "primary": "always",
      "secondary": "usually, every time",
      "pos": "adv, n, uk",
      "": ""
    },
    {
      "kanji": "いつも",
      "kana": "いつも",
      "primary": "never (with neg. verb)",
      "secondary": "",
      "pos": "adv, n, uk",
      "": ""
    },
    {
      "kanji": "犬",
      "kana": "いぬ",
      "primary": "dog",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "今",
      "kana": "いま",
      "primary": "now",
      "secondary": "the present time, just now, immediately, (one) more",
      "pos": "N-adv, n",
      "": ""
    },
    {
      "kanji": "意味",
      "kana": "いみ",
      "primary": "meaning",
      "secondary": "significance",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "妹",
      "kana": "いもうと",
      "primary": "younger sister",
      "secondary": "",
      "pos": "n, hum",
      "": ""
    },
    {
      "kanji": "嫌",
      "kana": "いや",
      "primary": "unpleasant",
      "secondary": "disagreeable, detestable, reluctant",
      "pos": "Adj-na, n",
      "": ""
    },
    {
      "kanji": "入口",
      "kana": "いりぐち",
      "primary": "entrance",
      "secondary": "entry, gate, approach, mouth",
      "pos": "n, adj-no",
      "": ""
    },
    {
      "kanji": "居る",
      "kana": "いる",
      "primary": "to be (of animate objects)",
      "secondary": "to have (used for people and animals)",
      "pos": "v1, vi, uk",
      "": ""
    },
    {
      "kanji": "居る",
      "kana": "いる",
      "primary": "to stay",
      "secondary": "",
      "pos": "v1, vi, uk",
      "": ""
    },
    {
      "kanji": "居る",
      "kana": "いる",
      "primary": "(after the -te form of a verb indicating) continuing action or state",
      "secondary": "",
      "pos": "v1, aux-v",
      "": ""
    },
    {
      "kanji": "要る",
      "kana": "いる",
      "primary": "to need",
      "secondary": "",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "入れる",
      "kana": "いれる",
      "primary": "to put in",
      "secondary": "to set (a jewel, etc...)",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "入れる",
      "kana": "いれる",
      "primary": "to admit",
      "secondary": "to accept, to employ, to hire",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "色",
      "kana": "いろ",
      "primary": "color",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "いろいろ",
      "kana": "いろいろ",
      "primary": "various",
      "secondary": "",
      "pos": "n, adj-na, adj-no, adv, adv-to",
      "": ""
    },
    {
      "kanji": "上",
      "kana": "うえ",
      "primary": "above",
      "secondary": "up, over",
      "pos": "n, adj-no, n-adv, n-suf",
      "": ""
    },
    {
      "kanji": "上",
      "kana": "うえ",
      "primary": "top",
      "secondary": "summit",
      "pos": "n, adj-no, n-adv, n-suf",
      "": ""
    },
    {
      "kanji": "上",
      "kana": "うえ",
      "primary": "surface",
      "secondary": "on",
      "pos": "n, adj-no, n-adv, n-suf",
      "": ""
    },
    {
      "kanji": "上",
      "kana": "うえ",
      "primary": "before",
      "secondary": "previous",
      "pos": "n, adj-no, n-adv, n-suf",
      "": ""
    },
    {
      "kanji": "後ろ",
      "kana": "うしろ",
      "primary": "behind",
      "secondary": "back, rear",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "薄い",
      "kana": "うすい",
      "primary": "thin",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "薄い",
      "kana": "うすい",
      "primary": "pale",
      "secondary": "light",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "薄い",
      "kana": "うすい",
      "primary": "watery",
      "secondary": "dilute, sparse",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "薄い",
      "kana": "うすい",
      "primary": "weak (taste, etc...)",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "歌",
      "kana": "うた",
      "primary": "song",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "歌",
      "kana": "うた",
      "primary": "(classical) Japanese poetry (esp. tanka)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "歌",
      "kana": "うた",
      "primary": "modern poetry",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "歌う",
      "kana": "うたう",
      "primary": "to sing",
      "secondary": "",
      "pos": "v5u, vt",
      "": ""
    },
    {
      "kanji": "生まれる",
      "kana": "うまれる",
      "primary": "to be born",
      "secondary": "",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "海",
      "kana": "うみ",
      "primary": "sea",
      "secondary": "beach",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "売る",
      "kana": "うる",
      "primary": "to sell",
      "secondary": "",
      "pos": "v5r, vt",
      "": ""
    },
    {
      "kanji": "煩い",
      "kana": "うるさい",
      "primary": "noisy",
      "secondary": "loud",
      "pos": "Adj-i, uk",
      "": ""
    },
    {
      "kanji": "煩い",
      "kana": "うるさい",
      "primary": "fussy",
      "secondary": "",
      "pos": "Adj-i, uk",
      "": ""
    },
    {
      "kanji": "煩い",
      "kana": "うるさい",
      "primary": "annoying",
      "secondary": "troublesome, tiresome, importunate",
      "pos": "Adj-i, uk",
      "": ""
    },
    {
      "kanji": "煩い",
      "kana": "うるさい",
      "primary": "bossy",
      "secondary": "",
      "pos": "Adj-i, uk",
      "": ""
    },
    {
      "kanji": "上着",
      "kana": "うわぎ",
      "primary": "jacket",
      "secondary": "coat, tunic, outer garment",
      "pos": "n, adj-no",
      "": ""
    },
    {
      "kanji": "絵",
      "kana": "え",
      "primary": "picture",
      "secondary": "drawing, painting, sketch",
      "pos": "n, n-suf",
      "": ""
    },
    {
      "kanji": "映画",
      "kana": "えいが",
      "primary": "movie",
      "secondary": "film",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "映画館",
      "kana": "えいがかん",
      "primary": "movie theater (theatre)",
      "secondary": "cinema",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "英語",
      "kana": "えいご",
      "primary": "English (language)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "ええ",
      "kana": "ええ",
      "primary": "yes",
      "secondary": "that is correct, right, (used with flat intonation)",
      "pos": "int",
      "": ""
    },
    {
      "kanji": "ええ",
      "kana": "ええ",
      "primary": "um...",
      "secondary": "Errr, (said trailing off, ええええー）",
      "pos": "int",
      "": ""
    },
    {
      "kanji": "ええ",
      "kana": "ええ",
      "primary": "huh?",
      "secondary": "(used with questioning intonation)",
      "pos": "int",
      "": ""
    },
    {
      "kanji": "ええ",
      "kana": "ええ",
      "primary": "grrr",
      "secondary": "gah, Must I? (used with questioning intonation)",
      "pos": "int",
      "": ""
    },
    {
      "kanji": "駅",
      "kana": "えき",
      "primary": "station",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "エレベーター",
      "kana": "エレベーター",
      "primary": "elevator",
      "secondary": "lift",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "鉛筆",
      "kana": "えんぴつ",
      "primary": "pencil",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "おいしい",
      "kana": "おいしい",
      "primary": "delicious",
      "secondary": "tasty",
      "pos": "Adj-i, uk",
      "": ""
    },
    {
      "kanji": "多い",
      "kana": "おおい",
      "primary": "many",
      "secondary": "numerous",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "大きい",
      "kana": "おおきい",
      "primary": "big",
      "secondary": "large, great",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "大きな",
      "kana": "おおきな",
      "primary": "big",
      "secondary": "large, great",
      "pos": "Adj-f",
      "": ""
    },
    {
      "kanji": "大勢",
      "kana": "おおぜい",
      "primary": "crowd (of people)",
      "secondary": "many, great number of people",
      "pos": "n, adj-no",
      "": ""
    },
    {
      "kanji": "お母さん",
      "kana": "おかあさん",
      "primary": "mother",
      "secondary": "",
      "pos": "n, hon",
      "": ""
    },
    {
      "kanji": "お菓子",
      "kana": "おかし",
      "primary": "sweets",
      "secondary": "confections, candy",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "お金",
      "kana": "おかね",
      "primary": "money",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "起きる",
      "kana": "おきる",
      "primary": "to get up",
      "secondary": "to rise",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "起きる",
      "kana": "おきる",
      "primary": "to wake up",
      "secondary": "",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "起きる",
      "kana": "おきる",
      "primary": "to occur (usu. Of unfavorable incidents)",
      "secondary": "to happen, to take place",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "置く",
      "kana": "おく",
      "primary": "to put",
      "secondary": "to place",
      "pos": "v5k",
      "": ""
    },
    {
      "kanji": "置く",
      "kana": "おく",
      "primary": "to leave (behind)",
      "secondary": "",
      "pos": "v5k",
      "": ""
    },
    {
      "kanji": "置く",
      "kana": "おく",
      "primary": "to do something in advance",
      "secondary": "",
      "pos": "uk",
      "": ""
    },
    {
      "kanji": "奥さん",
      "kana": "おくさん",
      "primary": "(your) wife",
      "secondary": "wife, his wife, married lady, madam",
      "pos": "n, hon",
      "": ""
    },
    {
      "kanji": "お酒",
      "kana": "おさけ",
      "primary": "alcohol",
      "secondary": "sake",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "お皿",
      "kana": "おさら",
      "primary": "plate",
      "secondary": "dish",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "お祖父さん",
      "kana": "おじいさん",
      "primary": "grandfather",
      "secondary": "",
      "pos": "n, hon",
      "": ""
    },
    {
      "kanji": "お祖父さん",
      "kana": "おじいさん",
      "primary": "male senior-citizen",
      "secondary": "",
      "pos": "n, hon",
      "": ""
    },
    {
      "kanji": "教える",
      "kana": "おしえる",
      "primary": "to teach",
      "secondary": "to inform, to tell, to instruct",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "伯父さん, 叔父さん",
      "kana": "おじさん",
      "primary": "uncle",
      "secondary": "",
      "pos": "n, hon",
      "": ""
    },
    {
      "kanji": "小父さん",
      "kana": "おじさん",
      "primary": "old man",
      "secondary": "mister",
      "pos": "n, hon",
      "": ""
    },
    {
      "kanji": "押す",
      "kana": "おす",
      "primary": "to push",
      "secondary": "to press",
      "pos": "v5s, vt",
      "": ""
    },
    {
      "kanji": "押す",
      "kana": "おす",
      "primary": "to press down",
      "secondary": "to apply pressure from above",
      "pos": "v5s, vt",
      "": ""
    },
    {
      "kanji": "押す",
      "kana": "おす",
      "primary": "to stamp (i.e. a passport)",
      "secondary": "to apply a seal",
      "pos": "v5s, vt",
      "": ""
    },
    {
      "kanji": "遅い",
      "kana": "おそい",
      "primary": "slow",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "遅い",
      "kana": "おそい",
      "primary": "late (e.g. late at night)",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "遅い",
      "kana": "おそい",
      "primary": "too late",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "お茶",
      "kana": "おちゃ",
      "primary": "tea (usually green)",
      "secondary": "",
      "pos": "n, pol",
      "": ""
    },
    {
      "kanji": "お茶",
      "kana": "おちゃ",
      "primary": "tea break (at work)",
      "secondary": "",
      "pos": "n, pol",
      "": ""
    },
    {
      "kanji": "お茶",
      "kana": "おちゃ",
      "primary": "tea ceremony",
      "secondary": "",
      "pos": "n, pol",
      "": ""
    },
    {
      "kanji": "お手洗い",
      "kana": "おてあらい",
      "primary": "bathroom",
      "secondary": "toilet, restroom, lavatory",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "お父さん",
      "kana": "おとうさん",
      "primary": "father",
      "secondary": "",
      "pos": "n, hon",
      "": ""
    },
    {
      "kanji": "弟",
      "kana": "おとうと",
      "primary": "younger brother",
      "secondary": "",
      "pos": "n, hum",
      "": ""
    },
    {
      "kanji": "男",
      "kana": "おとこ",
      "primary": "Man",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "男の子",
      "kana": "おとこのこ",
      "primary": "Boy",
      "secondary": "male child, baby boy",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "一昨日",
      "kana": "おととい, いっさくじつ、おとつい",
      "primary": "day before yesterday",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "一昨年",
      "kana": "おととし、いっさくねん",
      "primary": "year before last",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "大人",
      "kana": "おとな",
      "primary": "Adult",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "お腹",
      "kana": "おなか",
      "primary": "stomach",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "同じ",
      "kana": "おなじ",
      "primary": "same",
      "secondary": "identical, equal, uniform, equivalent, common (origin), changeless, alike",
      "pos": "Adj-f, n",
      "": ""
    },
    {
      "kanji": "お兄さん",
      "kana": "おにいさん",
      "primary": "young man",
      "secondary": "buddy, fella, laddie",
      "pos": "vocative",
      "": ""
    },
    {
      "kanji": "お兄さん",
      "kana": "おにいさん",
      "primary": "older brother",
      "secondary": "elder brother",
      "pos": "n,hon",
      "": ""
    },
    {
      "kanji": "お姉さん",
      "kana": "おねえさん",
      "primary": "older sister",
      "secondary": "elder sister",
      "pos": "n, hon",
      "": ""
    },
    {
      "kanji": "お姉さん",
      "kana": "おねえさん",
      "primary": "young lady",
      "secondary": "",
      "pos": "vocative",
      "": ""
    },
    {
      "kanji": "お姉さん",
      "kana": "おねえさん",
      "primary": "miss (referring to a waitress, etc..)",
      "secondary": "",
      "pos": "n, hon",
      "": ""
    },
    {
      "kanji": "お祖母さん",
      "kana": "おばあさん",
      "primary": "grandmother",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "お祖母さん",
      "kana": "おばあさん",
      "primary": "female senior-citizen",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "伯母さん/叔母さん",
      "kana": "おばさん",
      "primary": "Aunt",
      "secondary": "",
      "pos": "n, hon",
      "": ""
    },
    {
      "kanji": "小母さん",
      "kana": "おばさん",
      "primary": "old lady",
      "secondary": "ma'am",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "お風呂",
      "kana": "おふろ",
      "primary": "Bath",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "お弁当",
      "kana": "おべんとう",
      "primary": "(Japanese) box lunch",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "覚える",
      "kana": "おぼえる",
      "primary": "to remember",
      "secondary": "to recollect, to memorize",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "覚える",
      "kana": "おぼえる",
      "primary": "to feel",
      "secondary": "",
      "pos": "v1, vt",
      "": "X"
    },
    {
      "kanji": "御巡りさん",
      "kana": "おまわりさん",
      "primary": "(friendly term for a) policeman",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "重い",
      "kana": "おもい",
      "primary": "Heavy",
      "secondary": "massive",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "重い",
      "kana": "おもい",
      "primary": "serious",
      "secondary": "important, severe, oppressed",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "面白い",
      "kana": "おもしろい",
      "primary": "Interesting",
      "secondary": "amusing",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "泳ぐ",
      "kana": "およぐ",
      "primary": "to swim",
      "secondary": "",
      "pos": "v5g, vi",
      "": ""
    },
    {
      "kanji": "降りる",
      "kana": "おりる",
      "primary": "to descend (e.g. a mountain)",
      "secondary": "to go down",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "降りる",
      "kana": "おりる",
      "primary": "to get off",
      "secondary": "to disembark, to dismount",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "終る",
      "kana": "おわる",
      "primary": "to finish",
      "secondary": "to end, to close",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "音楽",
      "kana": "おんがく",
      "primary": "Music",
      "secondary": "musical movement",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "女",
      "kana": "おんな",
      "primary": "Woman",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "女の子",
      "kana": "おんなのこ",
      "primary": "Girl",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "外国",
      "kana": "がいこく",
      "primary": "foreign country",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "外国人",
      "kana": "がいこくじん",
      "primary": "Foreigner",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "会社",
      "kana": "かいしゃ",
      "primary": "Company",
      "secondary": "corporation",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "階段",
      "kana": "かいだん",
      "primary": "Stairs",
      "secondary": "stairway, staircase",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "買い物",
      "kana": "かいもの",
      "primary": "Shopping",
      "secondary": "purchased goods",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "買う",
      "kana": "かう",
      "primary": "to buy",
      "secondary": "",
      "pos": "v5u, vt",
      "": ""
    },
    {
      "kanji": "返す",
      "kana": "かえす",
      "primary": "to return (something)",
      "secondary": "to restore, to put back",
      "pos": "v5s, vt",
      "": ""
    },
    {
      "kanji": "返す",
      "kana": "かえす",
      "primary": "to turn over",
      "secondary": "to turn upside down, to overturn",
      "pos": "v5s, vt",
      "": ""
    },
    {
      "kanji": "帰る",
      "kana": "かえる",
      "primary": "to go back",
      "secondary": "to return, to come back, to go home",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "帰る",
      "kana": "かえる",
      "primary": "(of a guest, customer, etc...) to leave",
      "secondary": "",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "顔",
      "kana": "かお",
      "primary": "(person's) face",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "かかる",
      "kana": "かかる",
      "primary": "to take (time or money)",
      "secondary": "",
      "pos": "v5r, vi, uk",
      "": ""
    },
    {
      "kanji": "かかる",
      "kana": "かかる",
      "primary": "to hang",
      "secondary": "",
      "pos": "v5r, vi, uk",
      "": ""
    },
    {
      "kanji": "鍵",
      "kana": "かぎ",
      "primary": "key",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "鍵",
      "kana": "かぎ",
      "primary": "lock",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "書く",
      "kana": "かく",
      "primary": "to write",
      "secondary": "",
      "pos": "v5k, vt",
      "": ""
    },
    {
      "kanji": "学生",
      "kana": "がくせい",
      "primary": "Student (esp. a university student)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "掛ける",
      "kana": "かける",
      "primary": "to make (a call)",
      "secondary": "",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "傘",
      "kana": "かさ",
      "primary": "Umbrella",
      "secondary": "parasol",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "貸す",
      "kana": "かす",
      "primary": "to lend",
      "secondary": "to loan",
      "pos": "v5s, vt",
      "": ""
    },
    {
      "kanji": "貸す",
      "kana": "かす",
      "primary": "to rent out",
      "secondary": "to hire out",
      "pos": "v5s, vt",
      "": ""
    },
    {
      "kanji": "風",
      "kana": "かぜ",
      "primary": "Wind",
      "secondary": "breeze",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "風邪",
      "kana": "かぜ",
      "primary": "cold (illness)",
      "secondary": "common cold",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "家族",
      "kana": "かぞく",
      "primary": "Family",
      "secondary": "members of a family",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "方",
      "kana": "かた",
      "primary": "direction",
      "secondary": "way",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "方",
      "kana": "かた",
      "primary": "person",
      "secondary": "lady, gentleman",
      "pos": "n, n-suf",
      "": ""
    },
    {
      "kanji": "~方",
      "kana": "~かた",
      "primary": "method of",
      "secondary": "manner of, way of",
      "pos": "N-suf",
      "": ""
    },
    {
      "kanji": "学校",
      "kana": "がっこう",
      "primary": "School",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "カップ",
      "kana": "カップ",
      "primary": "Cup",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "家庭",
      "kana": "かてい",
      "primary": "Household",
      "secondary": "home, household",
      "pos": "n, adj-no",
      "": ""
    },
    {
      "kanji": "角",
      "kana": "かど",
      "primary": "(a) corner (of a desk, pavement, etc...)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "角",
      "kana": "かど",
      "primary": "edge",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "鞄",
      "kana": "かばん",
      "primary": "(cloth, leather, etc... NOT paper, plastic) bag",
      "secondary": "satchel, briefcase, basket",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "花瓶",
      "kana": "かびん",
      "primary": "a (flower) vase",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "被る",
      "kana": "かぶる",
      "primary": "to wear (on head)",
      "secondary": "",
      "pos": "v5r, vt",
      "": ""
    },
    {
      "kanji": "紙",
      "kana": "かみ",
      "primary": "paper",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "カメラ",
      "kana": "カメラ",
      "primary": "camera",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "火曜日",
      "kana": "かようび",
      "primary": "Tuesday",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "辛い",
      "kana": "からい",
      "primary": "Spicy",
      "secondary": "hot",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "辛い",
      "kana": "からい",
      "primary": "salty",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "辛い",
      "kana": "からい",
      "primary": "tough (on someone)",
      "secondary": "adverse, harsh",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "体",
      "kana": "からだ",
      "primary": "Body",
      "secondary": "",
      "pos": "n, adj-no",
      "": ""
    },
    {
      "kanji": "体",
      "kana": "からだ",
      "primary": "health",
      "secondary": "",
      "pos": "n, adj-no",
      "": ""
    },
    {
      "kanji": "借りる",
      "kana": "かりる",
      "primary": "to borrow",
      "secondary": "to have a loan",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "借りる",
      "kana": "かりる",
      "primary": "to rent",
      "secondary": "to hire",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "軽い",
      "kana": "かるい",
      "primary": "Light (i.e. not heavy)",
      "secondary": "feeling light (i.e. offering little resistance, moving easily)",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "軽い",
      "kana": "かるい",
      "primary": "light (i.e. of foot)",
      "secondary": "nimble, agile",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "カレー",
      "kana": "カレー",
      "primary": "Curry",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "カレンダー",
      "kana": "カレンダー",
      "primary": "calendar",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "川, 河",
      "kana": "かわ",
      "primary": "River",
      "secondary": "stream",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "川, 河",
      "kana": "かわ, がわ",
      "primary": "(the …) river (suffix used with the names of rivers)",
      "secondary": "",
      "pos": "suf",
      "": ""
    },
    {
      "kanji": "可愛い",
      "kana": "かわいい",
      "primary": "Cute",
      "secondary": "adorable, charming, lovely, pretty",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "可愛い",
      "kana": "かわいい",
      "primary": "dear",
      "secondary": "precious, darling, pet",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "可愛い",
      "kana": "かわいい",
      "primary": "cute little",
      "secondary": "tiny",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "漢字",
      "kana": "かんじ",
      "primary": "]",
      "secondary": "kanji",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "木",
      "kana": "き",
      "primary": "tree",
      "secondary": "wood, timber",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "黄色",
      "kana": "きいろ",
      "primary": "yellow",
      "secondary": "amber",
      "pos": "Adj-na, n",
      "": ""
    },
    {
      "kanji": "黄色い",
      "kana": "きいろい",
      "primary": "yellow",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "消える",
      "kana": "きえる",
      "primary": "to disappear",
      "secondary": "to go out, to vanish",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "聞く",
      "kana": "きく",
      "primary": "to hear",
      "secondary": "",
      "pos": "v5k, vt",
      "": ""
    },
    {
      "kanji": "聞く",
      "kana": "きく",
      "primary": "to listen (e.g. to music)",
      "secondary": "",
      "pos": "v5k, vt",
      "": ""
    },
    {
      "kanji": "聞く",
      "kana": "きく",
      "primary": "to ask",
      "secondary": "to enquire",
      "pos": "v5k, vt",
      "": ""
    },
    {
      "kanji": "北",
      "kana": "きた",
      "primary": "North",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "ギター",
      "kana": "ギター",
      "primary": "Guitar",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "汚い",
      "kana": "きたない",
      "primary": "Dirty",
      "secondary": "unclean, filthy",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "喫茶店",
      "kana": "きっさてん",
      "primary": "coffee lounge",
      "secondary": "coffee shop, (rather formal) cafe",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "切手",
      "kana": "きって",
      "primary": "(postage) stamp",
      "secondary": "merchandise certificate",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "切符",
      "kana": "きっぷ",
      "primary": "Ticket",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "昨日",
      "kana": "きのう",
      "primary": "Yesterday",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "九",
      "kana": "きゅう / く",
      "primary": "Nine",
      "secondary": "",
      "pos": "num",
      "": ""
    },
    {
      "kanji": "牛肉",
      "kana": "ぎゅうにく",
      "primary": "Beef",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "牛乳",
      "kana": "ぎゅうにゅう",
      "primary": "(cow's) Milk",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "今日",
      "kana": "きょう",
      "primary": "Today",
      "secondary": "this day",
      "pos": "N-t",
      "": ""
    },
    {
      "kanji": "教室",
      "kana": "きょうしつ",
      "primary": "Classroom",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "兄弟",
      "kana": "きょうだい",
      "primary": "siblings",
      "secondary": "brothers and sisters",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "去年",
      "kana": "きょねん",
      "primary": "last year",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "嫌い",
      "kana": "きらい",
      "primary": "Hate",
      "secondary": "dislike",
      "pos": "Adj-na, n",
      "": ""
    },
    {
      "kanji": "嫌い",
      "kana": "きらい",
      "primary": "suspicion",
      "secondary": "tendency, smack (of)",
      "pos": "suf",
      "": ""
    },
    {
      "kanji": "切る",
      "kana": "きる",
      "primary": "to cut (through)",
      "secondary": "",
      "pos": "suf, v5r, vt",
      "": ""
    },
    {
      "kanji": "切る",
      "kana": "きる",
      "primary": "to sever (connections, ties)",
      "secondary": "",
      "pos": "suf, v5r, vt",
      "": ""
    },
    {
      "kanji": "切る",
      "kana": "きる",
      "primary": "to turn off (i.e. the light)",
      "secondary": "",
      "pos": "suf, v5r, vt",
      "": ""
    },
    {
      "kanji": "着る",
      "kana": "きる",
      "primary": "to put on (from the shoulders down)",
      "secondary": "to wear",
      "pos": "v1",
      "": ""
    },
    {
      "kanji": "着る",
      "kana": "きる",
      "primary": "to bear (guilt, etc...)",
      "secondary": "",
      "pos": "v1",
      "": ""
    },
    {
      "kanji": "きれい",
      "kana": "きれい",
      "primary": "pretty",
      "secondary": "lovely, beautiful, fair",
      "pos": "Adj-na, uk",
      "": ""
    },
    {
      "kanji": "きれい",
      "kana": "きれい",
      "primary": "clean",
      "secondary": "clear, pure, tidy, neat",
      "pos": "Adj-na, uk",
      "": ""
    },
    {
      "kanji": "きれい",
      "kana": "きれい",
      "primary": "completely",
      "secondary": "entirely",
      "pos": "Adj-na, uk",
      "": ""
    },
    {
      "kanji": "キロ, キログラム",
      "kana": "キロ, キログラム",
      "primary": "Kilogram",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "キロ,キロメートル",
      "kana": "キロ,キロメートル",
      "primary": "Kilometer",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "銀行",
      "kana": "ぎんこう",
      "primary": "Bank",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "金曜日",
      "kana": "きんようび",
      "primary": "Friday",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "薬",
      "kana": "くすり",
      "primary": "medicine",
      "secondary": "pharmaceuticals, (legal) drugs",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "下さい",
      "kana": "ください",
      "primary": "Please (give me)",
      "secondary": "",
      "pos": "uk, hon",
      "": ""
    },
    {
      "kanji": "下さい",
      "kana": "ください",
      "primary": "(after te-form of a verb or a noun prefixed with o- or go-) please (do for me)",
      "secondary": "",
      "pos": "uk, hon",
      "": ""
    },
    {
      "kanji": "果物",
      "kana": "くだもの",
      "primary": "Fruit",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "口",
      "kana": "くち",
      "primary": "mouth",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "口",
      "kana": "くち",
      "primary": "opening",
      "secondary": "hole, gap, orifice",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "靴",
      "kana": "くつ",
      "primary": "Shoes",
      "secondary": "footwear",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "靴下",
      "kana": "くつした",
      "primary": "Socks",
      "secondary": "stockings, stocking",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "国",
      "kana": "くに",
      "primary": "Country",
      "secondary": "(the) state",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "国",
      "kana": "くに",
      "primary": "region",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "国",
      "kana": "くに",
      "primary": "home (i.e. hometown, home country)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "曇り",
      "kana": "くもり",
      "primary": "cloudy weather",
      "secondary": "cloudiness, shadow",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "曇る",
      "kana": "くもる",
      "primary": "to become cloudy",
      "secondary": "to become dim",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "暗い",
      "kana": "くらい",
      "primary": "Gloomy",
      "secondary": "dark",
      "pos": "Adj-i, uk",
      "": ""
    },
    {
      "kanji": "暗い",
      "kana": "くらい",
      "primary": "dark (in color)",
      "secondary": "dull",
      "pos": "Adj-i, uk",
      "": ""
    },
    {
      "kanji": "暗い",
      "kana": "くらい",
      "primary": "depressed",
      "secondary": "dispirited",
      "pos": "Adj-i, uk",
      "": ""
    },
    {
      "kanji": "クラス",
      "kana": "クラス",
      "primary": "Class",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "グラム",
      "kana": "グラム",
      "primary": "Gram",
      "secondary": "gramme",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "来る",
      "kana": "くる",
      "primary": "to come (spatially or temporally)",
      "secondary": "to approach, to arrive",
      "pos": "vk, vi, aux-v",
      "": ""
    },
    {
      "kanji": "来る",
      "kana": "くる",
      "primary": "to come back",
      "secondary": "to do … and come back",
      "pos": "vk, vi, aux-v",
      "": ""
    },
    {
      "kanji": "車",
      "kana": "くるま",
      "primary": "car",
      "secondary": "automobile, vehicle",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "車",
      "kana": "くるま",
      "primary": "wheel",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "黒",
      "kana": "くろ",
      "primary": "Black",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "黒",
      "kana": "くろ",
      "primary": "dark",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "黒い",
      "kana": "くろい",
      "primary": "black",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "黒い",
      "kana": "くろい",
      "primary": "dark",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "黒い",
      "kana": "くろい",
      "primary": "illicit",
      "secondary": "wicked, underground",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "警官",
      "kana": "けいかん",
      "primary": "policeman",
      "secondary": "",
      "pos": "n,adj-no",
      "": ""
    },
    {
      "kanji": "今朝",
      "kana": "けさ",
      "primary": "this morning",
      "secondary": "",
      "pos": "N-t",
      "": ""
    },
    {
      "kanji": "消す",
      "kana": "けす",
      "primary": "to erase",
      "secondary": "to delete, to cross out",
      "pos": "v5s, vt",
      "": ""
    },
    {
      "kanji": "消す",
      "kana": "けす",
      "primary": "to turn off power",
      "secondary": "",
      "pos": "v5s, vt",
      "": ""
    },
    {
      "kanji": "消す",
      "kana": "けす",
      "primary": "to extinguish",
      "secondary": "to put out",
      "pos": "v5s, vt",
      "": ""
    },
    {
      "kanji": "結構",
      "kana": "けっこう",
      "primary": "splendid",
      "secondary": "nice",
      "pos": "Adj-na, n-adv, n, uk",
      "": ""
    },
    {
      "kanji": "結構",
      "kana": "けっこう",
      "primary": "sufficient",
      "secondary": "“I'm fine” (no thank you)",
      "pos": "Adj-na",
      "": ""
    },
    {
      "kanji": "結構",
      "kana": "けっこう",
      "primary": "OK",
      "secondary": "tolerable",
      "pos": "Adj-na",
      "": ""
    },
    {
      "kanji": "結婚",
      "kana": "けっこん",
      "primary": "Marriage",
      "secondary": "",
      "pos": "n, adj-no, vs",
      "": ""
    },
    {
      "kanji": "月曜日",
      "kana": "げつようび",
      "primary": "Monday",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "玄関",
      "kana": "げんかん",
      "primary": "entry hall",
      "secondary": "entranceway",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "元気",
      "kana": "げんき",
      "primary": "health",
      "secondary": "robust, vigor, energy, vitality, vim, stamina, spirit, courage",
      "pos": "Adj-na, n",
      "": ""
    },
    {
      "kanji": "五",
      "kana": "ご",
      "primary": "Five",
      "secondary": "",
      "pos": "num",
      "": ""
    },
    {
      "kanji": "公園",
      "kana": "こうえん",
      "primary": "(public) Park",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "交差点",
      "kana": "こうさてん",
      "primary": "intersection",
      "secondary": "intersection",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "紅茶",
      "kana": "こうちゃ",
      "primary": "black tea",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "交番",
      "kana": "こうばん",
      "primary": "police box",
      "secondary": "",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "交番",
      "kana": "こうばん",
      "primary": "alternation",
      "secondary": "alternating (e.g. current)",
      "pos": "n, adj-f",
      "": ""
    },
    {
      "kanji": "声",
      "kana": "こえ",
      "primary": "Voice",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "コート",
      "kana": "コート",
      "primary": "coat",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "コート",
      "kana": "コート",
      "primary": "court (i.e. tennis, basketball, etc...)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "コーヒー",
      "kana": "コーヒー",
      "primary": "Coffee",
      "secondary": "",
      "pos": "n,adj-no",
      "": ""
    },
    {
      "kanji": "ここ",
      "kana": "ここ",
      "primary": "Here",
      "secondary": "this place",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "午後",
      "kana": "ごご",
      "primary": "afternoon",
      "secondary": "p.m.",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "九日",
      "kana": "ここのか",
      "primary": "nine days",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "九日",
      "kana": "ここのか",
      "primary": "ninth (day of the month)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "九つ",
      "kana": "ここのつ",
      "primary": "Nine",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "ご主人",
      "kana": "ごしゅじん",
      "primary": "your husband",
      "secondary": "her husband",
      "pos": "n,hon",
      "": ""
    },
    {
      "kanji": "午前",
      "kana": "ごぜん",
      "primary": "morning",
      "secondary": "a.m.",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "答える",
      "kana": "こたえる",
      "primary": "to answer",
      "secondary": "to reply",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "こちら, こっち",
      "kana": "こちら, こっち",
      "primary": "this way",
      "secondary": "this direction",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "こちら, こっち",
      "kana": "こちら, こっち",
      "primary": "Here",
      "secondary": "",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "こちら, こっち",
      "kana": "こちら, こっち",
      "primary": "this one",
      "secondary": "",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "こちら, こっち",
      "kana": "こちら, こっち",
      "primary": "I, me",
      "secondary": "",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "こちら, こっち",
      "kana": "こちら, こっち",
      "primary": "this person",
      "secondary": "",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "コップ",
      "kana": "コップ",
      "primary": "a glass",
      "secondary": "tumbler",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "今年",
      "kana": "ことし",
      "primary": "this year",
      "secondary": "",
      "pos": "n-adv,n-t",
      "": ""
    },
    {
      "kanji": "言葉",
      "kana": "ことば",
      "primary": "language",
      "secondary": "dialect",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "言葉",
      "kana": "ことば",
      "primary": "word",
      "secondary": "words, phrase, term, expression, remark",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "子供",
      "kana": "こども",
      "primary": "Child",
      "secondary": "children",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "この",
      "kana": "この",
      "primary": "This",
      "secondary": "",
      "pos": "Adj-pn, uk",
      "": ""
    },
    {
      "kanji": "御飯",
      "kana": "ごはん",
      "primary": "cooked rice",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "御飯",
      "kana": "ごはん",
      "primary": "meal",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "コピー",
      "kana": "コピー",
      "primary": "copy",
      "secondary": "photocopy",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "困る",
      "kana": "こまる",
      "primary": "to be worried",
      "secondary": "to be bothered",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "これ",
      "kana": "これ",
      "primary": "This (indicating an item near the speaker, the action of the speaker, or the current topic)",
      "secondary": "",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "今月",
      "kana": "こんげつ",
      "primary": "this month",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "今週",
      "kana": "こんしゅう",
      "primary": "this week",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "こんな",
      "kana": "こんな",
      "primary": "Such (about something/someone close to the speaker (including the speaker), or about ideas expressed by the speaker)",
      "secondary": "like this",
      "pos": "Adj-pn",
      "": ""
    },
    {
      "kanji": "今晩",
      "kana": "こんばん",
      "primary": "this evening",
      "secondary": "tonight",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "さあ",
      "kana": "さあ",
      "primary": "well…",
      "secondary": "",
      "pos": "conj, int",
      "": ""
    },
    {
      "kanji": "財布",
      "kana": "さいふ",
      "primary": "Wallet",
      "secondary": "purse, handbag",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "魚",
      "kana": "さかな",
      "primary": "Fish",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "先",
      "kana": "さき",
      "primary": "previous",
      "secondary": "prior, former, some time ago, preceding",
      "pos": "n, adj-no, n-suf, pref",
      "": ""
    },
    {
      "kanji": "咲く",
      "kana": "さく",
      "primary": "to bloom",
      "secondary": "",
      "pos": "v5k, vi",
      "": ""
    },
    {
      "kanji": "作文",
      "kana": "さくぶん",
      "primary": "writing",
      "secondary": "composition",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "差す",
      "kana": "さす",
      "primary": "to hold up (an umbrella, etc...)",
      "secondary": "to put up, to raise",
      "pos": "v5s, vi",
      "": ""
    },
    {
      "kanji": "雑誌",
      "kana": "ざっし",
      "primary": "Magazine",
      "secondary": "journal, periodical",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "砂糖",
      "kana": "さとう",
      "primary": "Sugar",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "寒い",
      "kana": "さむい",
      "primary": "Cold",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "再来年",
      "kana": "さらいねん",
      "primary": "year after next",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "三",
      "kana": "さん",
      "primary": "Three",
      "secondary": "",
      "pos": "num",
      "": ""
    },
    {
      "kanji": "散歩",
      "kana": "さんぽする",
      "primary": "to stroll",
      "secondary": "to go for a walk",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "四",
      "kana": "し / よん",
      "primary": "Four",
      "secondary": "",
      "pos": "num",
      "": ""
    },
    {
      "kanji": "塩",
      "kana": "しお",
      "primary": "Salt",
      "secondary": "common salt, table salt",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "しかし",
      "kana": "しかし",
      "primary": "However",
      "secondary": "but",
      "pos": "conj, uk",
      "": ""
    },
    {
      "kanji": "時間",
      "kana": "じかん",
      "primary": "Time",
      "secondary": "",
      "pos": "N-adv, n",
      "": ""
    },
    {
      "kanji": "時間",
      "kana": "じかん",
      "primary": "hours",
      "secondary": "",
      "pos": "ctr",
      "": ""
    },
    {
      "kanji": "仕事",
      "kana": "しごと",
      "primary": "Job",
      "secondary": "work, business, occupation, employment, vocation, task",
      "pos": "n, vs, adj-no",
      "": ""
    },
    {
      "kanji": "辞書",
      "kana": "じしょ",
      "primary": "Dictionary",
      "secondary": "lexicon",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "静か",
      "kana": "しずか",
      "primary": "Quiet",
      "secondary": "peaceful",
      "pos": "Adj-na",
      "": ""
    },
    {
      "kanji": "下",
      "kana": "した",
      "primary": "Below",
      "secondary": "down, under",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "下",
      "kana": "した",
      "primary": "bottom",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "下",
      "kana": "した",
      "primary": "beneath",
      "secondary": "underneath",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "七",
      "kana": "しち / なな",
      "primary": "Seven",
      "secondary": "",
      "pos": "num",
      "": ""
    },
    {
      "kanji": "質問",
      "kana": "しつもん",
      "primary": "Question",
      "secondary": "inquiry, enquiry",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "自転車",
      "kana": "じてんしゃ",
      "primary": "Bicycle",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "自動車",
      "kana": "じどうしゃ",
      "primary": "Automobile",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "死ぬ",
      "kana": "しぬ",
      "primary": "to die",
      "secondary": "",
      "pos": "v5n, vn, vi, sens",
      "": ""
    },
    {
      "kanji": "字引",
      "kana": "じびき",
      "primary": "Dictionary",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "自分",
      "kana": "じぶん",
      "primary": "Oneself",
      "secondary": "myself, yourself, himself, herself",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "自分",
      "kana": "じぶん",
      "primary": "I",
      "secondary": "me",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "閉まる",
      "kana": "しまる",
      "primary": "to close",
      "secondary": "to be closed, to be shut",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "閉まる",
      "kana": "しまる",
      "primary": "to be locked",
      "secondary": "",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "閉まる",
      "kana": "しまる",
      "primary": "to tighten",
      "secondary": "to be tightened",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "閉める",
      "kana": "しめる",
      "primary": "to close",
      "secondary": "to shut",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "締める",
      "kana": "しめる",
      "primary": "to tie",
      "secondary": "to fasten",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "締める",
      "kana": "しめる",
      "primary": "to total",
      "secondary": "to sum",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "締める",
      "kana": "しめる",
      "primary": "to be strict with",
      "secondary": "",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "じゃ/じゃあ",
      "kana": "じゃ/じゃあ",
      "primary": "well then…",
      "secondary": "then, so, well",
      "pos": "conj, int",
      "": ""
    },
    {
      "kanji": "写真",
      "kana": "しゃしん",
      "primary": "photograph",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "シャツ",
      "kana": "シャツ",
      "primary": "Shirt",
      "secondary": "singlet",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "シャワー",
      "kana": "シャワー",
      "primary": "Shower",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "十",
      "kana": "じゅう, とお",
      "primary": "Ten",
      "secondary": "",
      "pos": "num",
      "": ""
    },
    {
      "kanji": "授業",
      "kana": "じゅぎょう",
      "primary": "lesson",
      "secondary": "class work",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "宿題",
      "kana": "しゅくだい",
      "primary": "homework",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "上手",
      "kana": "じょうず",
      "primary": "Skillful",
      "secondary": "skill, dexterity",
      "pos": "Adj-na, n",
      "": ""
    },
    {
      "kanji": "丈夫",
      "kana": "じょうぶ",
      "primary": "strong",
      "secondary": "healthy, robust, solid, durable",
      "pos": "Adj-na",
      "": ""
    },
    {
      "kanji": "醤油",
      "kana": "しょうゆ",
      "primary": "soy sauce",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "食堂",
      "kana": "しょくどう",
      "primary": "dining hall",
      "secondary": "dining room, cafeteria, messroom",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "食堂",
      "kana": "しょくどう",
      "primary": "diner",
      "secondary": "restaurant, snack bar, eatery",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "知る",
      "kana": "しる",
      "primary": "to know",
      "secondary": "to understand, to be acquainted with, to feel",
      "pos": "v5r, vt",
      "": ""
    },
    {
      "kanji": "白",
      "kana": "しろ",
      "primary": "White",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "白い",
      "kana": "しろい",
      "primary": "White",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "新聞",
      "kana": "しんぶん",
      "primary": "newspaper",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "水曜日",
      "kana": "すいようび",
      "primary": "Wednesday",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "吸う",
      "kana": "すう",
      "primary": "to smoke",
      "secondary": "to breathe, to inhale",
      "pos": "v5u, vt",
      "": ""
    },
    {
      "kanji": "吸う",
      "kana": "すう",
      "primary": "to suck",
      "secondary": "to sip, to slurp",
      "pos": "v5u, vt",
      "": ""
    },
    {
      "kanji": "吸う",
      "kana": "すう",
      "primary": "to absorb",
      "secondary": "to soak up",
      "pos": "v5u, vt",
      "": ""
    },
    {
      "kanji": "スカート",
      "kana": "スカート",
      "primary": "Skirt",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "好き",
      "kana": "すき",
      "primary": "liking",
      "secondary": "fondness, love",
      "pos": "Adj-na, n",
      "": ""
    },
    {
      "kanji": "少ない",
      "kana": "すくない",
      "primary": "a few",
      "secondary": "a little, scarce, insufficient, seldom",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "すぐに",
      "kana": "すぐに",
      "primary": "Instantly",
      "secondary": "immediately",
      "pos": "adv, uk",
      "": ""
    },
    {
      "kanji": "少し",
      "kana": "すこし",
      "primary": "Few",
      "secondary": "small quantity, little, something",
      "pos": "adv, n",
      "": ""
    },
    {
      "kanji": "少し",
      "kana": "すこし",
      "primary": "little while",
      "secondary": "",
      "pos": "adv, n",
      "": ""
    },
    {
      "kanji": "少し",
      "kana": "すこし",
      "primary": "short distance",
      "secondary": "",
      "pos": "adv, n",
      "": ""
    },
    {
      "kanji": "涼しい",
      "kana": "すずしい",
      "primary": "Refreshing",
      "secondary": "cool",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "ストーブ",
      "kana": "ストーブ",
      "primary": "Heater",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "スプーン",
      "kana": "スプーン",
      "primary": "Spoon",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "スポーツ",
      "kana": "スポーツ",
      "primary": "Sport",
      "secondary": "",
      "pos": "n,adj-no",
      "": ""
    },
    {
      "kanji": "ズボン",
      "kana": "ズボン",
      "primary": "Trousers",
      "secondary": "pants",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "住む",
      "kana": "すむ",
      "primary": "to live (of humans)",
      "secondary": "to reside, to inhabit, to dwell, to abide",
      "pos": "v5m, vi",
      "": ""
    },
    {
      "kanji": "スリッパ",
      "kana": "スリッパ",
      "primary": "Slippers",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "する",
      "kana": "する",
      "primary": "to do",
      "secondary": "",
      "pos": "Vs-i, uk",
      "": ""
    },
    {
      "kanji": "する",
      "kana": "する",
      "primary": "to make (into)",
      "secondary": "to turn (into)",
      "pos": "vs-i, uk",
      "": ""
    },
    {
      "kanji": "する",
      "kana": "する",
      "primary": "to serve as",
      "secondary": "to work as",
      "pos": "vs-i, uk",
      "": ""
    },
    {
      "kanji": "座る",
      "kana": "すわる",
      "primary": "to sit",
      "secondary": "to squat",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "座る",
      "kana": "すわる",
      "primary": "to assume (a position)",
      "secondary": "",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "背",
      "kana": "せ",
      "primary": "height",
      "secondary": "stature",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "生徒",
      "kana": "せいと",
      "primary": "Pupil",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "セーター",
      "kana": "セーター",
      "primary": "sweater, jumper",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "せっけん",
      "kana": "せっけん",
      "primary": "Economy",
      "secondary": "thrift",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "背広",
      "kana": "せびろ",
      "primary": "business suit",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "狭い",
      "kana": "せまい",
      "primary": "Narrow",
      "secondary": "confined, small",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "ゼロ",
      "kana": "ゼロ",
      "primary": "Zero",
      "secondary": "",
      "pos": "n,adj-no",
      "": ""
    },
    {
      "kanji": "千",
      "kana": "せん",
      "primary": "Thousand",
      "secondary": 1000,
      "pos": "num",
      "": ""
    },
    {
      "kanji": "先月",
      "kana": "せんげつ",
      "primary": "last month",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "先週",
      "kana": "せんしゅう",
      "primary": "last week",
      "secondary": "the week before",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "先生",
      "kana": "せんせい",
      "primary": "teacher",
      "secondary": "master, doctor",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "先生",
      "kana": "せんせい",
      "primary": "(with names of teachers, etc. as an) honorific title",
      "secondary": "",
      "pos": "suf",
      "": ""
    },
    {
      "kanji": "洗濯",
      "kana": "せんたく",
      "primary": "Washing",
      "secondary": "laundry",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "全部",
      "kana": "ぜんぶ",
      "primary": "All",
      "secondary": "entire, whole, altogether",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "掃除",
      "kana": "そうじ",
      "primary": "cleaning",
      "secondary": "sweeping",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "そうして",
      "kana": "そうして",
      "primary": "like that",
      "secondary": "and",
      "pos": "conj, uk",
      "": ""
    },
    {
      "kanji": "そして",
      "kana": "そして",
      "primary": "and then",
      "secondary": "and, thus, and now",
      "pos": "conj, uk",
      "": ""
    },
    {
      "kanji": "そこ",
      "kana": "そこ",
      "primary": "there (place relatively near listener)",
      "secondary": "",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "そこ",
      "kana": "そこ",
      "primary": "there (place just mentioned)",
      "secondary": "that place",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "そこ",
      "kana": "そこ",
      "primary": "then (of some incident just spoken of)",
      "secondary": "that (of point just raised)",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "そちら, そっち",
      "kana": "そちら, そっち",
      "primary": "that way (by you)",
      "secondary": "",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "そちら, そっち",
      "kana": "そちら, そっち",
      "primary": "there",
      "secondary": "",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "そちら, そっち",
      "kana": "そちら, そっち",
      "primary": "that one",
      "secondary": "",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "そちら, そっち",
      "kana": "そちら, そっち",
      "primary": "you",
      "secondary": "your family",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "外",
      "kana": "そと",
      "primary": "Outside",
      "secondary": "exterior",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "外",
      "kana": "そと",
      "primary": "open air",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "その",
      "kana": "その",
      "primary": "that (something or someone distant from the speaker, close to the listener; actions of the listener, or ideas expressed or understood by the listener)",
      "secondary": "the",
      "pos": "",
      "": ""
    },
    {
      "kanji": "その",
      "kana": "その",
      "primary": "um...",
      "secondary": "er..., uh... (hesitation sound)",
      "pos": "Adj-pn, uk",
      "": ""
    },
    {
      "kanji": "側",
      "kana": "そば",
      "primary": "near",
      "secondary": "close, beside, vicinity, proximity, besides, while",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "空",
      "kana": "そら",
      "primary": "Sky",
      "secondary": "the heavens",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "それ",
      "kana": "それ",
      "primary": "that (indicating an item or person near the listener, the action of the listener, or something on their mind)",
      "secondary": "it",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "それ",
      "kana": "それ",
      "primary": "that time",
      "secondary": "then",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "それから",
      "kana": "それから",
      "primary": "after that",
      "secondary": "and then",
      "pos": "exp, uk",
      "": ""
    },
    {
      "kanji": "それでは",
      "kana": "それでは",
      "primary": "in that situation",
      "secondary": "in which case",
      "pos": "exp, uk",
      "": ""
    },
    {
      "kanji": "それでは",
      "kana": "それでは",
      "primary": "well then…",
      "secondary": "",
      "pos": "exp, uk",
      "": ""
    },
    {
      "kanji": "大学",
      "kana": "だいがく",
      "primary": "university",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "大使館",
      "kana": "たいしかん",
      "primary": "embassy",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "大丈夫",
      "kana": "だいじょうぶ",
      "primary": "all right",
      "secondary": "safe, OK",
      "pos": "Adj-na, adv, n",
      "": ""
    },
    {
      "kanji": "大好き",
      "kana": "だいすき",
      "primary": "very likeable",
      "secondary": "loveable, like very much",
      "pos": "Adj-na, n",
      "": ""
    },
    {
      "kanji": "大切",
      "kana": "たいせつ",
      "primary": "important",
      "secondary": "valuable, worthy of care",
      "pos": "Adj-na, n",
      "": ""
    },
    {
      "kanji": "たいてい",
      "kana": "たいてい",
      "primary": "mostly",
      "secondary": "ordinarily, usually",
      "pos": "Adj-na, adv, n, uk",
      "": ""
    },
    {
      "kanji": "たいてい",
      "kana": "たいてい",
      "primary": "probably",
      "secondary": "",
      "pos": "Adj-na, adv, n, uk",
      "": ""
    },
    {
      "kanji": "たいてい",
      "kana": "たいてい",
      "primary": "most",
      "secondary": "almost all",
      "pos": "Adj-no, n",
      "": ""
    },
    {
      "kanji": "台所",
      "kana": "だいどころ",
      "primary": "kitchen",
      "secondary": "",
      "pos": "n,adj-no",
      "": ""
    },
    {
      "kanji": "大変",
      "kana": "たいへん",
      "primary": "very",
      "secondary": "greatly",
      "pos": "adv",
      "": ""
    },
    {
      "kanji": "大変",
      "kana": "たいへん",
      "primary": "immense",
      "secondary": "enormous, great",
      "pos": "Adj-na, n",
      "": ""
    },
    {
      "kanji": "大変",
      "kana": "たいへん",
      "primary": "serious",
      "secondary": "grave, dreadful, terrible",
      "pos": "Adj-na, n",
      "": ""
    },
    {
      "kanji": "高い",
      "kana": "たかい",
      "primary": "high",
      "secondary": "tall",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "高い",
      "kana": "たかい",
      "primary": "expensive",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "たくさん",
      "kana": "たくさん",
      "primary": "many",
      "secondary": "a lot, much",
      "pos": "Adj-na, adv, n, uk",
      "": ""
    },
    {
      "kanji": "タクシー",
      "kana": "タクシー",
      "primary": "taxi",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "出す",
      "kana": "だす",
      "primary": "to take out",
      "secondary": "",
      "pos": "v5s, vt",
      "": ""
    },
    {
      "kanji": "出す",
      "kana": "だす",
      "primary": "to reveal",
      "secondary": "to show",
      "pos": "v5s, vt",
      "": ""
    },
    {
      "kanji": "出す",
      "kana": "だす",
      "primary": "to submit (e.g. thesis)",
      "secondary": "to turn in",
      "pos": "v5s, vt",
      "": ""
    },
    {
      "kanji": "出す",
      "kana": "だす",
      "primary": "to publish",
      "secondary": "",
      "pos": "v5s, vt",
      "": ""
    },
    {
      "kanji": "出す",
      "kana": "だす",
      "primary": "to send (e.g. letter)",
      "secondary": "",
      "pos": "v5s, vt",
      "": ""
    },
    {
      "kanji": "立つ",
      "kana": "たつ",
      "primary": "to stand",
      "secondary": "to rise, to stand up",
      "pos": "v5t, vi",
      "": ""
    },
    {
      "kanji": "縦",
      "kana": "たて",
      "primary": "(the) vertical",
      "secondary": "height",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "縦",
      "kana": "たて",
      "primary": "length",
      "secondary": "Front-to-back",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "建物",
      "kana": "たてもの",
      "primary": "building",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "楽しい",
      "kana": "たのしい",
      "primary": "enjoyable",
      "secondary": "fun",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "頼む",
      "kana": "たのむ",
      "primary": "to ask",
      "secondary": "to request, to beg",
      "pos": "v5m",
      "": ""
    },
    {
      "kanji": "頼む",
      "kana": "たのむ",
      "primary": "to call",
      "secondary": "to order, to reserve",
      "pos": "v5m",
      "": ""
    },
    {
      "kanji": "たばこ",
      "kana": "たばこ",
      "primary": "tobacco",
      "secondary": "cigarettes",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "たぶん",
      "kana": "たぶん",
      "primary": "probably",
      "secondary": "perhaps",
      "pos": "adv, n",
      "": ""
    },
    {
      "kanji": "たぶん",
      "kana": "たぶん",
      "primary": "many",
      "secondary": "generous, much, great",
      "pos": "Adj-na, adj-no",
      "": ""
    },
    {
      "kanji": "食べ物",
      "kana": "たべもの",
      "primary": "food",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "食べる",
      "kana": "たべる",
      "primary": "to eat",
      "secondary": "",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "卵",
      "kana": "たまご",
      "primary": "(hen) egg(s)",
      "secondary": "spawn, roe",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "誰",
      "kana": "だれ",
      "primary": "who",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "誰",
      "kana": "だれか",
      "primary": "somebody",
      "secondary": "someone",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "誕生日",
      "kana": "たんじょうび",
      "primary": "birthday",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "だんだん",
      "kana": "だんだん",
      "primary": "gradually",
      "secondary": "by degrees",
      "pos": "n, adv-to, adv",
      "": ""
    },
    {
      "kanji": "小さい",
      "kana": "ちいさい",
      "primary": "little",
      "secondary": "small, tiny",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "小さな",
      "kana": "ちいさな",
      "primary": "little",
      "secondary": "small, tiny",
      "pos": "Adj-pn",
      "": ""
    },
    {
      "kanji": "近い",
      "kana": "ちかい",
      "primary": "near",
      "secondary": "close, short (distance)",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "違う",
      "kana": "ちがう",
      "primary": "to differ (from)",
      "secondary": "to vary",
      "pos": "v5u, vi",
      "": ""
    },
    {
      "kanji": "違う",
      "kana": "ちがう",
      "primary": "to not be in the usual condition",
      "secondary": "",
      "pos": "v5u, vi",
      "": ""
    },
    {
      "kanji": "違う",
      "kana": "ちがう",
      "primary": "to not match the correct (answer, etc...)",
      "secondary": "",
      "pos": "v5u, vi",
      "": ""
    },
    {
      "kanji": "近く",
      "kana": "ちかく",
      "primary": "near",
      "secondary": "neighborhood",
      "pos": "N-adv, n",
      "": ""
    },
    {
      "kanji": "近く",
      "kana": "ちかく",
      "primary": "nearly",
      "secondary": "close to",
      "pos": "N-suf",
      "": ""
    },
    {
      "kanji": "近く",
      "kana": "ちかく",
      "primary": "shortly",
      "secondary": "soon",
      "pos": "adv",
      "": ""
    },
    {
      "kanji": "地下鉄",
      "kana": "ちかてつ",
      "primary": "underground train",
      "secondary": "subway",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "地図",
      "kana": "ちず",
      "primary": "map",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "父",
      "kana": "ちち",
      "primary": "father",
      "secondary": "",
      "pos": "n, hum",
      "": ""
    },
    {
      "kanji": "茶色",
      "kana": "ちゃいろ",
      "primary": "light brown",
      "secondary": "tawny",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "茶わん",
      "kana": "ちゃわん",
      "primary": "rice bowl",
      "secondary": "tea cup, teacup",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "ちょうど",
      "kana": "ちょうど",
      "primary": "exactly",
      "secondary": "just, right",
      "pos": "Adj-na, adv, n, uk",
      "": ""
    },
    {
      "kanji": "ちょっと",
      "kana": "ちょっと",
      "primary": "somewhat",
      "secondary": "easily, readily, rather",
      "pos": "adv, uk",
      "": ""
    },
    {
      "kanji": "ちょっと",
      "kana": "ちょっと",
      "primary": "just a minute",
      "secondary": "short time, just a little",
      "pos": "adv, uk",
      "": ""
    },
    {
      "kanji": "一日",
      "kana": "ついたち",
      "primary": "first of month",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "使う",
      "kana": "つかう",
      "primary": "to use (a person, animal, etc...)",
      "secondary": "to employ",
      "pos": "v5u, vt",
      "": ""
    },
    {
      "kanji": "使う",
      "kana": "つかう",
      "primary": "to make use of",
      "secondary": "",
      "pos": "v5u, vt",
      "": ""
    },
    {
      "kanji": "使う",
      "kana": "つかう",
      "primary": "to use (time, money, etc...)",
      "secondary": "to spend, to consume",
      "pos": "v5u, vt",
      "": ""
    },
    {
      "kanji": "疲れる",
      "kana": "つかれる",
      "primary": "to get tired",
      "secondary": "to tire",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "疲れる",
      "kana": "つかれる",
      "primary": "to be worn out (e.g. of well used objects)",
      "secondary": "",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "次",
      "kana": "つぎ",
      "primary": "next",
      "secondary": "following, subsequent",
      "pos": "n, adj-no",
      "": ""
    },
    {
      "kanji": "次",
      "kana": "つぎ",
      "primary": "stage",
      "secondary": "station",
      "pos": "n, adj-no",
      "": ""
    },
    {
      "kanji": "着く",
      "kana": "つく",
      "primary": "to arrive at",
      "secondary": "to reach",
      "pos": "v5k",
      "": ""
    },
    {
      "kanji": "着く",
      "kana": "つく",
      "primary": "to sit on",
      "secondary": "to sit at",
      "pos": "v5k",
      "": ""
    },
    {
      "kanji": "机",
      "kana": "つくえ",
      "primary": "desk",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "作る",
      "kana": "つくる",
      "primary": "to make",
      "secondary": "to produce, to manufacture, to build",
      "pos": "v5r, vt",
      "": ""
    },
    {
      "kanji": "作る",
      "kana": "つくる",
      "primary": "to prepare (food)",
      "secondary": "to brew (alcohol)",
      "pos": "v5r, vt",
      "": ""
    },
    {
      "kanji": "作る",
      "kana": "つくる",
      "primary": "to raise",
      "secondary": "to cultivate",
      "pos": "v5r, vt",
      "": ""
    },
    {
      "kanji": "点ける",
      "kana": "つける",
      "primary": "to turn on",
      "secondary": "to switch on, to light up",
      "pos": "v1, vt, uk",
      "": ""
    },
    {
      "kanji": "勤める",
      "kana": "つとめる",
      "primary": "to work for someone",
      "secondary": "to be employed (at), to serve (in)",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "つまらない",
      "kana": "つまらない",
      "primary": "boring",
      "secondary": "dull, uninteresting",
      "pos": "Adj-i, uk",
      "": ""
    },
    {
      "kanji": "つまらない",
      "kana": "つまらない",
      "primary": "insignificant",
      "secondary": "trifling",
      "pos": "Adj-i, uk",
      "": ""
    },
    {
      "kanji": "冷たい",
      "kana": "つめたい",
      "primary": "cold (to the touch)",
      "secondary": "chilly, icy, freezing",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "強い",
      "kana": "つよい",
      "primary": "powerful",
      "secondary": "strong, mighty, potent",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "強い",
      "kana": "つよい",
      "primary": "resistant",
      "secondary": "resilient, durable",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "手",
      "kana": "て",
      "primary": "hand",
      "secondary": "arm",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "手",
      "kana": "て",
      "primary": "forepaw",
      "secondary": "foreleg",
      "pos": "col",
      "": ""
    },
    {
      "kanji": "手",
      "kana": "て",
      "primary": "handle",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "テープ",
      "kana": "テープ",
      "primary": "tape",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "テーブル",
      "kana": "テーブル",
      "primary": "table",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "テープレコーダー",
      "kana": "テープレコーダー",
      "primary": "tape recorder",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "出かける",
      "kana": "でかける",
      "primary": "to go out (e.g. on an excursion or outing)",
      "secondary": "to depart, to set out, to start, to be going out",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "手紙",
      "kana": "てがみ",
      "primary": "letter",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "出来る",
      "kana": "できる",
      "primary": "to be able to",
      "secondary": "to be up to the task",
      "pos": "v1, vi, uk",
      "": ""
    },
    {
      "kanji": "出来る",
      "kana": "できる",
      "primary": "to be ready",
      "secondary": "to be completed",
      "pos": "v1, vi, uk",
      "": ""
    },
    {
      "kanji": "出口",
      "kana": "でぐち",
      "primary": "exit",
      "secondary": "gateway, way out, outlet, leak, vent",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "テスト",
      "kana": "テスト",
      "primary": "test",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "では",
      "kana": "では",
      "primary": "with that",
      "secondary": "then, well, so, well then, それでは",
      "pos": "conj, int",
      "": ""
    },
    {
      "kanji": "デパート",
      "kana": "デパート",
      "primary": "department store",
      "secondary": "",
      "pos": "n, abbr",
      "": ""
    },
    {
      "kanji": "でも",
      "kana": "でも",
      "primary": "but",
      "secondary": "however, though, nevertheless, still, yet, even so",
      "pos": "conj",
      "": ""
    },
    {
      "kanji": "出る",
      "kana": "でる",
      "primary": "to appear",
      "secondary": "to come forth",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "出る",
      "kana": "でる",
      "primary": "to leave",
      "secondary": "to exit",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "出る",
      "kana": "でる",
      "primary": "to answer (the phone or door)",
      "secondary": "",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "テレビ",
      "kana": "テレビ",
      "primary": "television",
      "secondary": "TV",
      "pos": "n, abbr",
      "": ""
    },
    {
      "kanji": "天気",
      "kana": "てんき",
      "primary": "weather",
      "secondary": "the elements",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "天気",
      "kana": "てんき",
      "primary": "fair weather",
      "secondary": "fine weather",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "電気",
      "kana": "でんき",
      "primary": "electricity",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "電気",
      "kana": "でんき",
      "primary": "(electric) light",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "電気ストーブ",
      "kana": "でんきストーブ",
      "primary": "electric heater",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "電車",
      "kana": "でんしゃ",
      "primary": "(electric) train",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "電話",
      "kana": "でんわ",
      "primary": "telephone",
      "secondary": "",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "戸",
      "kana": "と",
      "primary": "Japanese style door",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "ドア",
      "kana": "ドア",
      "primary": "Western style door",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "トイレ",
      "kana": "トイレ",
      "primary": "toilet",
      "secondary": "restroom, bathroom, lavatory",
      "pos": "n, abbr",
      "": ""
    },
    {
      "kanji": "どう, いかが",
      "kana": "どう, いかが",
      "primary": "how",
      "secondary": "in what way, how about",
      "pos": "adv, uk",
      "": ""
    },
    {
      "kanji": "どうして",
      "kana": "どうして",
      "primary": "for what reason",
      "secondary": "why?, how, in what way, for what purpose, what for",
      "pos": "adv, int, uk",
      "": ""
    },
    {
      "kanji": "どうぞ",
      "kana": "どうぞ",
      "primary": "please",
      "secondary": "kindly",
      "pos": "adv",
      "": ""
    },
    {
      "kanji": "どうぞ",
      "kana": "どうぞ",
      "primary": "by all means",
      "secondary": "",
      "pos": "adv",
      "": ""
    },
    {
      "kanji": "動物",
      "kana": "どうぶつ",
      "primary": "animal",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "どうも",
      "kana": "どうも",
      "primary": "thanks",
      "secondary": "abbreviation of どうも有難う",
      "pos": "int, abbr",
      "": ""
    },
    {
      "kanji": "どうも",
      "kana": "どうも",
      "primary": "much (thanks)",
      "secondary": "very (sorry), quite (regret)",
      "pos": "adv",
      "": ""
    },
    {
      "kanji": "遠い",
      "kana": "とおい",
      "primary": "far",
      "secondary": "distant",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "十日",
      "kana": "とおか",
      "primary": "ten days",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "十日",
      "kana": "とおか",
      "primary": "(the) tenth (of the month)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "時々",
      "kana": "ときどき",
      "primary": "sometimes",
      "secondary": "at times",
      "pos": "adv, n",
      "": ""
    },
    {
      "kanji": "時計",
      "kana": "とけい",
      "primary": "watch",
      "secondary": "clock, timepiece",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "どこ",
      "kana": "どこ",
      "primary": "where",
      "secondary": "what place",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "所",
      "kana": "ところ",
      "primary": "place",
      "secondary": "spot, scene, site",
      "pos": "n, suf",
      "": ""
    },
    {
      "kanji": "年",
      "kana": "とし",
      "primary": "year",
      "secondary": "",
      "pos": "N-adv, n",
      "": ""
    },
    {
      "kanji": "年",
      "kana": "とし",
      "primary": "age",
      "secondary": "",
      "pos": "N-adv, n, suf",
      "": ""
    },
    {
      "kanji": "図書館",
      "kana": "としょかん",
      "primary": "library",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "どちら, どっち",
      "kana": "どちら, どっち",
      "primary": "which way",
      "secondary": "which direction, where",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "とても",
      "kana": "とても",
      "primary": "very",
      "secondary": "awfully, exceedingly",
      "pos": "adv, uk",
      "": ""
    },
    {
      "kanji": "とても",
      "kana": "とても",
      "primary": "(before a negative form) (not) at all",
      "secondary": "by no means",
      "pos": "adv, uk",
      "": ""
    },
    {
      "kanji": "どなた",
      "kana": "どなた",
      "primary": "who",
      "secondary": "",
      "pos": "n, uk, hon",
      "": ""
    },
    {
      "kanji": "隣",
      "kana": "となり",
      "primary": "next to (esp. living next door to)",
      "secondary": "neighbor",
      "pos": "n, adj-no",
      "": ""
    },
    {
      "kanji": "どの",
      "kana": "どの",
      "primary": "which",
      "secondary": "what (way)",
      "pos": "Adj-pn, uk",
      "": ""
    },
    {
      "kanji": "飛ぶ",
      "kana": "とぶ",
      "primary": "to jump",
      "secondary": "to leap, to spring, to bound, to hop",
      "pos": "v5b, vi",
      "": ""
    },
    {
      "kanji": "飛ぶ",
      "kana": "とぶ",
      "primary": "to fly",
      "secondary": "to soar",
      "pos": "v5b, vi",
      "": ""
    },
    {
      "kanji": "止まる",
      "kana": "とまる",
      "primary": "to stop",
      "secondary": "to halt",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "止まる",
      "kana": "とまる",
      "primary": "to come to a halt",
      "secondary": "",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "友達",
      "kana": "ともだち",
      "primary": "friend",
      "secondary": "companion",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "土曜日",
      "kana": "どようび",
      "primary": "Saturday",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "鳥",
      "kana": "とり",
      "primary": "bird",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "鳥",
      "kana": "とり",
      "primary": "bird meat (esp. chicken meat)",
      "secondary": "fowl, poultry",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "取る",
      "kana": "とる",
      "primary": "to take",
      "secondary": "to pick up, to harvest",
      "pos": "v5r, vt",
      "": ""
    },
    {
      "kanji": "取る",
      "kana": "とる",
      "primary": "to steal",
      "secondary": "",
      "pos": "v5r, vt",
      "": ""
    },
    {
      "kanji": "取る",
      "kana": "とる",
      "primary": "to eat",
      "secondary": "to have (a meal)",
      "pos": "v5r, vt",
      "": ""
    },
    {
      "kanji": "取る",
      "kana": "とる",
      "primary": "to remove (one's glasses, etc...)",
      "secondary": "",
      "pos": "v5r, vt",
      "": ""
    },
    {
      "kanji": "撮る",
      "kana": "とる",
      "primary": "to take (a photo)",
      "secondary": "to make (a film)",
      "pos": "v5r, vt",
      "": ""
    },
    {
      "kanji": "どれ",
      "kana": "どれ",
      "primary": "which (of three or more)",
      "secondary": "",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "ナイフ",
      "kana": "ナイフ",
      "primary": "knife",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "中",
      "kana": "なか",
      "primary": "middle",
      "secondary": "center",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "中",
      "kana": "なか",
      "primary": "inside",
      "secondary": "in",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "中",
      "kana": "なか",
      "primary": "among",
      "secondary": "within",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "中",
      "kana": "なか",
      "primary": "during",
      "secondary": "while",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "長い",
      "kana": "ながい",
      "primary": "long (distance)",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "長い",
      "kana": "ながい",
      "primary": "long (time)",
      "secondary": "lengthy",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "鳴く",
      "kana": "なく",
      "primary": "to bark",
      "secondary": "to purr, to make sound (animal)",
      "pos": "v5k",
      "": ""
    },
    {
      "kanji": "鳴く",
      "kana": "なく",
      "primary": "to sing (bird)",
      "secondary": "",
      "pos": "v5k",
      "": ""
    },
    {
      "kanji": "泣く",
      "kana": "なく",
      "primary": "to cry",
      "secondary": "to weep, to sob, to howl",
      "pos": "v5k",
      "": ""
    },
    {
      "kanji": "無くす",
      "kana": "なくす",
      "primary": "to lose something",
      "secondary": "",
      "pos": "v5s, vt",
      "": ""
    },
    {
      "kanji": "なぜ",
      "kana": "なぜ",
      "primary": "why",
      "secondary": "how",
      "pos": "adv, uk",
      "": ""
    },
    {
      "kanji": "夏",
      "kana": "なつ",
      "primary": "summer",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "夏休み",
      "kana": "なつやすみ",
      "primary": "summer vacation",
      "secondary": "summer holiday",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "等",
      "kana": "など",
      "primary": "et cetera",
      "secondary": "etc, and the like, and so forth",
      "pos": "n,n-suf, prt, uk",
      "": ""
    },
    {
      "kanji": "等",
      "kana": "など",
      "primary": "(indicating an approximate quote or vague suggestion) or something",
      "secondary": "",
      "pos": "n,n-suf, prt, uk",
      "": ""
    },
    {
      "kanji": "等",
      "kana": "など",
      "primary": "(lessening the significance or value of the previous word) the likes of",
      "secondary": "",
      "pos": "n,n-suf, prt, uk",
      "": ""
    },
    {
      "kanji": "七つ",
      "kana": "ななつ",
      "primary": "seven",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "七日",
      "kana": "なのか",
      "primary": "seven days",
      "secondary": "",
      "pos": "N-adv",
      "": ""
    },
    {
      "kanji": "七日",
      "kana": "なのか",
      "primary": "(the) seventh (day of the month)",
      "secondary": "",
      "pos": "N-adv",
      "": ""
    },
    {
      "kanji": "名前",
      "kana": "なまえ",
      "primary": "name",
      "secondary": "full name",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "名前",
      "kana": "なまえ",
      "primary": "given name",
      "secondary": "first name",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "習う",
      "kana": "ならう",
      "primary": "to learn",
      "secondary": "",
      "pos": "v5u, vt",
      "": ""
    },
    {
      "kanji": "並ぶ",
      "kana": "ならぶ",
      "primary": "to line up",
      "secondary": "to stand in a line",
      "pos": "v5b, vi",
      "": ""
    },
    {
      "kanji": "並ぶ",
      "kana": "ならぶ",
      "primary": "to rival",
      "secondary": "to match, to equal",
      "pos": "v5b, vi",
      "": ""
    },
    {
      "kanji": "並べる",
      "kana": "ならべる",
      "primary": "to line up",
      "secondary": "to set up",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "なる",
      "kana": "なる",
      "primary": "to become",
      "secondary": "to get, to grow, to be, to reach, to attain",
      "pos": "v5r, vi, uk",
      "": ""
    },
    {
      "kanji": "何",
      "kana": "なん/なに",
      "primary": "what",
      "secondary": "",
      "pos": "int, pn, adj-no",
      "": ""
    },
    {
      "kanji": "二",
      "kana": "に",
      "primary": "two",
      "secondary": "",
      "pos": "num",
      "": ""
    },
    {
      "kanji": "賑やか",
      "kana": "にぎやか",
      "primary": "bustling",
      "secondary": "busy",
      "pos": "Adj-na",
      "": ""
    },
    {
      "kanji": "肉",
      "kana": "にく",
      "primary": "meat",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "肉",
      "kana": "にく",
      "primary": "flesh",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "西",
      "kana": "にし",
      "primary": "west",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "日曜日",
      "kana": "にちようび",
      "primary": "Sunday",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "荷物",
      "kana": "にもつ",
      "primary": "luggage",
      "secondary": "baggage",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "ニュース",
      "kana": "ニュース",
      "primary": "news",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "庭",
      "kana": "にわ",
      "primary": "garden",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "脱ぐ",
      "kana": "ぬぐ",
      "primary": "to take off (clothes, shoes, etc...)",
      "secondary": "to undress",
      "pos": "v5g, vt",
      "": ""
    },
    {
      "kanji": "温い",
      "kana": "ぬるい",
      "primary": "lukewarm",
      "secondary": "tepid",
      "pos": "Adj-i, uk",
      "": ""
    },
    {
      "kanji": "ネクタイ",
      "kana": "ネクタイ",
      "primary": "tie",
      "secondary": "necktie",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "猫",
      "kana": "ねこ",
      "primary": "cat",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "寝る",
      "kana": "ねる",
      "primary": "to lie down",
      "secondary": "",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "寝る",
      "kana": "ねる",
      "primary": "to go to bed, to lie in bed",
      "secondary": "",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "寝る",
      "kana": "ねる",
      "primary": "to sleep (lying down)",
      "secondary": "",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "ノート",
      "kana": "ノート",
      "primary": "notebook",
      "secondary": "Copy-book, exercise book",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "ノート",
      "kana": "ノート",
      "primary": "note",
      "secondary": "",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "ノート",
      "kana": "ノート",
      "primary": "notebook PC",
      "secondary": "laptop PC",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "登る",
      "kana": "のぼる",
      "primary": "to climb",
      "secondary": "to ascend, to go up",
      "pos": "v5r,vi",
      "": ""
    },
    {
      "kanji": "登る",
      "kana": "のぼる",
      "primary": "to rise",
      "secondary": "to ascend (e.g. the sun)",
      "pos": "v5r,vi",
      "": ""
    },
    {
      "kanji": "登る",
      "kana": "のぼる",
      "primary": "to go to (the capital)",
      "secondary": "",
      "pos": "v5r,vi",
      "": ""
    },
    {
      "kanji": "登る",
      "kana": "のぼる",
      "primary": "to be promoted",
      "secondary": "",
      "pos": "v5r,vi",
      "": ""
    },
    {
      "kanji": "飲み物",
      "kana": "のみもの",
      "primary": "(a) drink",
      "secondary": "a beverage",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "飲む",
      "kana": "のむ",
      "primary": "to drink",
      "secondary": "to gulp, to swallow",
      "pos": "v5m, vt",
      "": ""
    },
    {
      "kanji": "飲む",
      "kana": "のむ",
      "primary": "to take (medicine)",
      "secondary": "",
      "pos": "v5m, vt",
      "": ""
    },
    {
      "kanji": "乗る",
      "kana": "のる",
      "primary": "to get on",
      "secondary": "to ride in, to board",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "乗る",
      "kana": "のる",
      "primary": "to spread (paints)",
      "secondary": "",
      "pos": "v5r",
      "": ""
    },
    {
      "kanji": "乗る",
      "kana": "のる",
      "primary": "to share in",
      "secondary": "to join",
      "pos": "v5r",
      "": ""
    },
    {
      "kanji": "歯",
      "kana": "は",
      "primary": "tooth",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "パーティー",
      "kana": "パーティー",
      "primary": "party",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "はい",
      "kana": "はい",
      "primary": "yes",
      "secondary": "",
      "pos": "int, pol",
      "": ""
    },
    {
      "kanji": "はい",
      "kana": "はい",
      "primary": "OK (used to get attention prior to an utterance)",
      "secondary": "okay",
      "pos": "int, pol",
      "": ""
    },
    {
      "kanji": "灰皿",
      "kana": "はいざら",
      "primary": "ashtray",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "入る",
      "kana": "はいる",
      "primary": "to enter",
      "secondary": "",
      "pos": "v5r",
      "": ""
    },
    {
      "kanji": "入る",
      "kana": "はいる",
      "primary": "to break into",
      "secondary": "",
      "pos": "v5r",
      "": ""
    },
    {
      "kanji": "入る",
      "kana": "はいる",
      "primary": "to join",
      "secondary": "to enroll",
      "pos": "v5r",
      "": ""
    },
    {
      "kanji": "入る",
      "kana": "はいる",
      "primary": "to contain",
      "secondary": "to hold, to accommodate",
      "pos": "v5r",
      "": ""
    },
    {
      "kanji": "葉書",
      "kana": "はがき",
      "primary": "postcard",
      "secondary": "",
      "pos": "n, abbr",
      "": ""
    },
    {
      "kanji": "葉書",
      "kana": "はがき",
      "primary": "memo, note, card",
      "secondary": "",
      "pos": "n, abbr",
      "": ""
    },
    {
      "kanji": "履く",
      "kana": "はく",
      "primary": "to put on (lower-body clothing i.e. pants, skirt, etc...)",
      "secondary": "to put on footwear",
      "pos": "v5k, vt",
      "": ""
    },
    {
      "kanji": "箱",
      "kana": "はこ",
      "primary": "box",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "橋",
      "kana": "はし",
      "primary": "bridge",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "箸",
      "kana": "はし",
      "primary": "chopsticks",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "始まる",
      "kana": "はじまる",
      "primary": "to begin",
      "secondary": "",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "初めに",
      "kana": "はじめに",
      "primary": "In the beginning",
      "secondary": "to begin with, first of all",
      "pos": "exp",
      "": ""
    },
    {
      "kanji": "初めて",
      "kana": "はじめて",
      "primary": "for the first time",
      "secondary": "",
      "pos": "adv, n",
      "": ""
    },
    {
      "kanji": "初めて",
      "kana": "はじめて",
      "primary": "only after … is it …",
      "secondary": "only when … do you …",
      "pos": "adv, n",
      "": ""
    },
    {
      "kanji": "走る",
      "kana": "はしる",
      "primary": "to run",
      "secondary": "",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "走る",
      "kana": "はしる",
      "primary": "to travel (movement of vehicles)",
      "secondary": "",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "走る",
      "kana": "はしる",
      "primary": "to hurry to",
      "secondary": "",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "走る",
      "kana": "はしる",
      "primary": "to retreat (from battle), to take flight",
      "secondary": "",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "バス",
      "kana": "バス",
      "primary": "bus",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "バス",
      "kana": "バス",
      "primary": "bath",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "バス",
      "kana": "バス",
      "primary": "bass",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "バター",
      "kana": "バター",
      "primary": "butter",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "二十歳",
      "kana": "はたち",
      "primary": "20 years old",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "働く",
      "kana": "はたらく",
      "primary": "to work",
      "secondary": "to labor",
      "pos": "v5k, vi",
      "": ""
    },
    {
      "kanji": "働く",
      "kana": "はたらく",
      "primary": "to function",
      "secondary": "to operate, to work (as in a machine works), to come into play",
      "pos": "v5k, vi",
      "": ""
    },
    {
      "kanji": "八",
      "kana": "はち",
      "primary": "eight",
      "secondary": "",
      "pos": "num",
      "": ""
    },
    {
      "kanji": "二十日",
      "kana": "はつか",
      "primary": "twenty days",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "二十日",
      "kana": "はつか",
      "primary": "20th (day of the month)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "花",
      "kana": "はな",
      "primary": "flower",
      "secondary": "blossom, bloom, petal",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "鼻",
      "kana": "はな",
      "primary": "nose",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "話",
      "kana": "はなし",
      "primary": "talk",
      "secondary": "speech, chat, story, conversation",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "話",
      "kana": "はなし",
      "primary": "discussions",
      "secondary": "negotiation",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "話す",
      "kana": "はなす",
      "primary": "to speak",
      "secondary": "",
      "pos": "v5s, vt",
      "": ""
    },
    {
      "kanji": "母",
      "kana": "はは",
      "primary": "mother",
      "secondary": "",
      "pos": "n, hum",
      "": ""
    },
    {
      "kanji": "早い",
      "kana": "はやい",
      "primary": "early (in the day, etc...)",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "早い",
      "kana": "はやい",
      "primary": "fast",
      "secondary": "quick, hasty, brisk",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "早い",
      "kana": "はやい",
      "primary": "(too) soon",
      "secondary": "not yet, (too) early",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "早い",
      "kana": "はやい",
      "primary": "easy",
      "secondary": "simple",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "速い",
      "kana": "はやい",
      "primary": "quick",
      "secondary": "fast, hasty, brisk",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "春",
      "kana": "はる",
      "primary": "spring",
      "secondary": "springtime",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "春",
      "kana": "はる",
      "primary": "new year",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "春",
      "kana": "はる",
      "primary": "prime (of one's life, etc...)",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "春",
      "kana": "はる",
      "primary": "adolescence",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "貼る",
      "kana": "はる",
      "primary": "to stick",
      "secondary": "to paste, to affix, to link (e.g. in WWW forums)",
      "pos": "v5r",
      "": ""
    },
    {
      "kanji": "晴れ",
      "kana": "はれ",
      "primary": "clear weather",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "晴れる",
      "kana": "はれる",
      "primary": "to be sunny",
      "secondary": "to clear up, to stop raining",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "晴れる",
      "kana": "はれる",
      "primary": "to refresh (e.g. spirits)",
      "secondary": "",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "晴れる",
      "kana": "はれる",
      "primary": "to be cleared (e.g. of a suspicion)",
      "secondary": "",
      "pos": "v1, vi",
      "": ""
    },
    {
      "kanji": "半",
      "kana": "はん",
      "primary": "half",
      "secondary": "",
      "pos": "n, n-adv, n-suf, n-pref",
      "": ""
    },
    {
      "kanji": "晩",
      "kana": "ばん",
      "primary": "evening",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "晩",
      "kana": "ばん",
      "primary": "(counter for) nights",
      "secondary": "",
      "pos": "ctr",
      "": ""
    },
    {
      "kanji": "パン",
      "kana": "パン",
      "primary": "bread",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "ハンカチ",
      "kana": "ハンカチ",
      "primary": "handkerchief",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "番号",
      "kana": "ばんごう",
      "primary": "number",
      "secondary": "series of digits",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "晩御飯",
      "kana": "ばんごはん",
      "primary": "dinner",
      "secondary": "evening meal",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "半分",
      "kana": "はんぶん",
      "primary": "half minute",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "半分",
      "kana": "はんぶん",
      "primary": "half",
      "secondary": "",
      "pos": "n, n-adv",
      "": ""
    },
    {
      "kanji": "東",
      "kana": "ひがし",
      "primary": "east",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "引く",
      "kana": "ひく",
      "primary": "to pull",
      "secondary": "",
      "pos": "v5k, vi, vt",
      "": ""
    },
    {
      "kanji": "引く",
      "kana": "ひく",
      "primary": "to draw (attention etc...)",
      "secondary": "to attract (interest, etc...)",
      "pos": "v5k, vi, vt",
      "": ""
    },
    {
      "kanji": "引く",
      "kana": "ひく",
      "primary": "to draw back",
      "secondary": "",
      "pos": "v5k, vi, vt",
      "": ""
    },
    {
      "kanji": "弾く",
      "kana": "ひく",
      "primary": "to play (an instrument with strings, including piano)",
      "secondary": "",
      "pos": "v5k",
      "": ""
    },
    {
      "kanji": "低い",
      "kana": "ひくい",
      "primary": "low (height, tone, rank, degree, cost, etc...)",
      "secondary": "short",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "飛行機",
      "kana": "ひこうき",
      "primary": "airplane",
      "secondary": "aeroplane, aircraft",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "左",
      "kana": "ひだり",
      "primary": "left",
      "secondary": "left hand side",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "一～",
      "kana": "ひと～",
      "primary": "one",
      "secondary": "",
      "pos": "pref",
      "": ""
    },
    {
      "kanji": "人",
      "kana": "ひと",
      "primary": "person",
      "secondary": "man",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "人",
      "kana": "ひと",
      "primary": "human being",
      "secondary": "mankind, people",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "一つ",
      "kana": "ひとつ",
      "primary": "one",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "一つ",
      "kana": "ひとつ",
      "primary": "for one thing (often used in itemized lists)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "一月",
      "kana": "ひとつき",
      "primary": "one month",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "一人",
      "kana": "ひとり",
      "primary": "one person",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "暇",
      "kana": "ひま",
      "primary": "free time",
      "secondary": "spare time, leisure",
      "pos": "Adj-na, n",
      "": ""
    },
    {
      "kanji": "百",
      "kana": "ひゃく",
      "primary": "hundred",
      "secondary": "",
      "pos": "num",
      "": ""
    },
    {
      "kanji": "病院",
      "kana": "びょういん",
      "primary": "hospital",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "病気",
      "kana": "びょうき",
      "primary": "illness",
      "secondary": "disease, sickness",
      "pos": "n, adj-no",
      "": ""
    },
    {
      "kanji": "昼",
      "kana": "ひる",
      "primary": "noon",
      "secondary": "midday",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "昼",
      "kana": "ひる",
      "primary": "daytime",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "昼",
      "kana": "ひる",
      "primary": "lunch",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "昼御飯",
      "kana": "ひるごはん",
      "primary": "lunch",
      "secondary": "midday meal",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "広い",
      "kana": "ひろい",
      "primary": "spacious",
      "secondary": "vast, wide",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "フィルム",
      "kana": "フィルム",
      "primary": "roll of film",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "封筒",
      "kana": "ふうとう",
      "primary": "envelope",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "プール",
      "kana": "プール",
      "primary": "swimming pool",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "フォーク",
      "kana": "フォーク",
      "primary": "fork",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "吹く",
      "kana": "ふく",
      "primary": "to blow (wind, etc.)",
      "secondary": "",
      "pos": "v5k",
      "": ""
    },
    {
      "kanji": "吹く",
      "kana": "ふく",
      "primary": "to emit",
      "secondary": "to spout",
      "pos": "v5k",
      "": ""
    },
    {
      "kanji": "服",
      "kana": "ふく",
      "primary": "clothes (esp. western clothes)",
      "secondary": "",
      "pos": "n, n-suf",
      "": ""
    },
    {
      "kanji": "服",
      "kana": "ふく",
      "primary": "(counter for) doses of medicine",
      "secondary": "gulps of tea, drags of a cigarette, etc...",
      "pos": "suf, ctr",
      "": ""
    },
    {
      "kanji": "二つ",
      "kana": "ふたつ",
      "primary": "two",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "豚肉",
      "kana": "ぶたにく",
      "primary": "pork",
      "secondary": "",
      "pos": "n,adj-no",
      "": ""
    },
    {
      "kanji": "二人",
      "kana": "ふたり",
      "primary": "two people",
      "secondary": "two persons, pair, couple",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "二日",
      "kana": "ふつか",
      "primary": "two days",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "二日",
      "kana": "ふつか",
      "primary": "the second (day of the month)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "太い",
      "kana": "ふとい",
      "primary": "fat",
      "secondary": "thick",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "太い",
      "kana": "ふとい",
      "primary": "deep (of a voice)",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "太い",
      "kana": "ふとい",
      "primary": "daring",
      "secondary": "shameless, brazen",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "冬",
      "kana": "ふゆ",
      "primary": "winter",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "降る",
      "kana": "ふる",
      "primary": "to precipitate",
      "secondary": "to fall (e.g. rain)",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "古い",
      "kana": "ふるい",
      "primary": "old (not used for people)",
      "secondary": "aged, ancient, antiquated, stale, threadbare, outmoded, obsolete article",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "風呂",
      "kana": "ふろ",
      "primary": "bath",
      "secondary": "bathtub",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "風呂",
      "kana": "ふろ",
      "primary": "bathroom",
      "secondary": "bathhouse",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "文章",
      "kana": "ぶんしょう",
      "primary": "sentence",
      "secondary": "article, composition",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "ページ",
      "kana": "ページ",
      "primary": "page",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "下手",
      "kana": "へた",
      "primary": "unskillful",
      "secondary": "poor, awkward",
      "pos": "Adj-na, n",
      "": ""
    },
    {
      "kanji": "下手",
      "kana": "へた",
      "primary": "imprudent",
      "secondary": "untactful",
      "pos": "Adj-na, n",
      "": ""
    },
    {
      "kanji": "ベッド",
      "kana": "ベッド",
      "primary": "bed",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "ペット",
      "kana": "ペット",
      "primary": "pet",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "部屋",
      "kana": "へや",
      "primary": "room",
      "secondary": "(one's own) place, apartment",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "辺",
      "kana": "へん",
      "primary": "area",
      "secondary": "vicinity",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "辺",
      "kana": "へん",
      "primary": "side (of triangle, rectangle, etc...)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "辺",
      "kana": "へん",
      "primary": "circumstances",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "ペン",
      "kana": "ペン",
      "primary": "pen",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "勉強",
      "kana": "べんきょう",
      "primary": "study",
      "secondary": "",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "便利",
      "kana": "べんり",
      "primary": "convenient",
      "secondary": "handy, useful",
      "pos": "Adj-na",
      "": ""
    },
    {
      "kanji": "帽子",
      "kana": "ぼうし",
      "primary": "hat",
      "secondary": "cap",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "ボールペン",
      "kana": "ボールペン",
      "primary": "ball-point pen",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "ほか",
      "kana": "ほか",
      "primary": "other (esp. places and things)",
      "secondary": "the rest",
      "pos": "Adj-no, n, n-adv",
      "": ""
    },
    {
      "kanji": "ポケット",
      "kana": "ポケット",
      "primary": "pocket",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "欲しい",
      "kana": "ほしい",
      "primary": "wanted",
      "secondary": "wished for, in need of, desired",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "ポスト",
      "kana": "ポスト",
      "primary": "post",
      "secondary": "position",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "ポスト",
      "kana": "ポスト",
      "primary": "postbox",
      "secondary": "mail box, pillar box",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "細い",
      "kana": "ほそい",
      "primary": "thin",
      "secondary": "slender, fine",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "ボタン",
      "kana": "ボタン",
      "primary": "button",
      "secondary": "",
      "pos": "n, uk",
      "": ""
    },
    {
      "kanji": "ホテル",
      "kana": "ホテル",
      "primary": "hotel",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "本",
      "kana": "ほん",
      "primary": "book",
      "secondary": "volume",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "本",
      "kana": "ほん",
      "primary": "main",
      "secondary": "head, this, our, present, real",
      "pos": "pref",
      "": ""
    },
    {
      "kanji": "本",
      "kana": "ほん",
      "primary": "(counter for) long cylindrical things",
      "secondary": "",
      "pos": "ctr",
      "": ""
    },
    {
      "kanji": "本棚",
      "kana": "ほんだな",
      "primary": "bookshelves",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "本当",
      "kana": "ほんとう",
      "primary": "truth",
      "secondary": "reality",
      "pos": "Adj-na, n",
      "": ""
    },
    {
      "kanji": "本当に",
      "kana": "ほんとうに,　ほんとに",
      "primary": "really",
      "secondary": "truly",
      "pos": "adv",
      "": ""
    },
    {
      "kanji": "毎朝",
      "kana": "まいあさ",
      "primary": "every morning",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "毎月",
      "kana": "まいげつ/まいつき",
      "primary": "every month",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "毎週",
      "kana": "まいしゅう",
      "primary": "every week",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "毎日",
      "kana": "まいにち",
      "primary": "every day",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "毎年",
      "kana": "まいねん/まいとし",
      "primary": "every year",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "毎晩",
      "kana": "まいばん",
      "primary": "every night",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "前",
      "kana": "まえ",
      "primary": "before (some event)",
      "secondary": "ago, previously",
      "pos": "N-adv, n-t, suf",
      "": ""
    },
    {
      "kanji": "前",
      "kana": "まえ",
      "primary": "in front (of)",
      "secondary": "before (e.g. the house)",
      "pos": "N-adv, n-t, suf",
      "": ""
    },
    {
      "kanji": "曲る",
      "kana": "まがる",
      "primary": "to bend",
      "secondary": "to curve, to warp, to wind, to twist",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "曲る",
      "kana": "まがる",
      "primary": "to turn",
      "secondary": "",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "曲る",
      "kana": "まがる",
      "primary": "to be awry",
      "secondary": "to be askew, to be crooked",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "まずい",
      "kana": "まずい",
      "primary": "unpleasant (taste, appearance, situation)",
      "secondary": "unappetizing",
      "pos": "Adj-i, uk",
      "": ""
    },
    {
      "kanji": "また",
      "kana": "また",
      "primary": "again",
      "secondary": "and, also, still (doing something)",
      "pos": "adv, conj, pref, uk",
      "": ""
    },
    {
      "kanji": "まだ",
      "kana": "まだ",
      "primary": "as yet",
      "secondary": "hitherto, still",
      "pos": "Adj-na, adv, uk",
      "": ""
    },
    {
      "kanji": "まだ",
      "kana": "まだ",
      "primary": "not yet (with negative verb)",
      "secondary": "",
      "pos": "Adj-na, adv, uk",
      "": ""
    },
    {
      "kanji": "町",
      "kana": "まち",
      "primary": "town",
      "secondary": "block, neighborhood",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "町",
      "kana": "まち",
      "primary": "street",
      "secondary": "road",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "待つ",
      "kana": "まつ",
      "primary": "to wait",
      "secondary": "",
      "pos": "v5t, vt",
      "": ""
    },
    {
      "kanji": "待つ",
      "kana": "まつ",
      "primary": "to await",
      "secondary": "to look forward to, to anticipate",
      "pos": "v5t, vt",
      "": ""
    },
    {
      "kanji": "待つ",
      "kana": "まつ",
      "primary": "to depend on (usually in negative form)",
      "secondary": "to need",
      "pos": "v5t, vt",
      "": ""
    },
    {
      "kanji": "真っすぐ",
      "kana": "まっすぐ",
      "primary": "straight (ahead)",
      "secondary": "direct, upright, erect",
      "pos": "Adj-na, adv, n",
      "": ""
    },
    {
      "kanji": "真っすぐ",
      "kana": "まっすぐ",
      "primary": "straightforward",
      "secondary": "honest",
      "pos": "Adj-na, adv, n",
      "": ""
    },
    {
      "kanji": "マッチ",
      "kana": "マッチ",
      "primary": "match (contest)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "マッチ",
      "kana": "マッチ",
      "primary": "match (to light fire with)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "窓",
      "kana": "まど",
      "primary": "window",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "丸い/円い",
      "kana": "まるい",
      "primary": "round",
      "secondary": "circular, spherical",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "万",
      "kana": "まん",
      "primary": "ten thousand",
      "secondary": "",
      "pos": "num",
      "": ""
    },
    {
      "kanji": "万年筆",
      "kana": "まんねんひつ",
      "primary": "fountain pen",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "磨く",
      "kana": "みがく",
      "primary": "to brush (teeth)",
      "secondary": "to polish, to shine",
      "pos": "v5k, vt",
      "": ""
    },
    {
      "kanji": "磨く",
      "kana": "みがく",
      "primary": "to refine",
      "secondary": "to improve",
      "pos": "v5k, vt",
      "": ""
    },
    {
      "kanji": "右",
      "kana": "みぎ",
      "primary": "right",
      "secondary": "right hand side",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "短い",
      "kana": "みじかい",
      "primary": "short",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "水",
      "kana": "みず",
      "primary": "water (cold, fresh)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "店",
      "kana": "みせ",
      "primary": "shop",
      "secondary": "store, establishment",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "見せる",
      "kana": "みせる",
      "primary": "to show",
      "secondary": "to display",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "道",
      "kana": "みち",
      "primary": "street",
      "secondary": "road, way, path, route, lane",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "三日",
      "kana": "みっか",
      "primary": "three days",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "三日",
      "kana": "みっか",
      "primary": "the third",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "三つ",
      "kana": "みっつ",
      "primary": "three",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "緑",
      "kana": "みどり",
      "primary": "green",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "皆",
      "kana": "みな, みんな",
      "primary": "everyone",
      "secondary": "all, everybody",
      "pos": "adv, n",
      "": ""
    },
    {
      "kanji": "皆",
      "kana": "みな, みんな",
      "primary": "everything",
      "secondary": "",
      "pos": "adv, n",
      "": ""
    },
    {
      "kanji": "南",
      "kana": "みなみ",
      "primary": "south",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "耳",
      "kana": "みみ",
      "primary": "ear",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "耳",
      "kana": "みみ",
      "primary": "hearing",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "耳",
      "kana": "みみ",
      "primary": "edge",
      "secondary": "crust",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "見る",
      "kana": "みる",
      "primary": "to see",
      "secondary": "to look, to watch",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "見る",
      "kana": "みる",
      "primary": "to look over",
      "secondary": "to look on",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "六日",
      "kana": "むいか",
      "primary": "sixth day (of the month)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "六日",
      "kana": "むいか",
      "primary": "six days",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "向こう",
      "kana": "むこう",
      "primary": "over there",
      "secondary": "that way, far away, beyond",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "向こう",
      "kana": "むこう",
      "primary": "opposite side",
      "secondary": "other side, opposite direction",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "難しい",
      "kana": "むずかしい",
      "primary": "difficult",
      "secondary": "hard, troublesome, complicated, serious",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "六つ",
      "kana": "むっつ",
      "primary": "six",
      "secondary": "",
      "pos": "num",
      "": ""
    },
    {
      "kanji": "村",
      "kana": "むら",
      "primary": "village",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "目",
      "kana": "め",
      "primary": "eye",
      "secondary": "eyeball",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "目",
      "kana": "め",
      "primary": "eyesight",
      "secondary": "sight, vision",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "メートル",
      "kana": "メートル",
      "primary": "meter",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "眼鏡",
      "kana": "めがね",
      "primary": "glasses",
      "secondary": "spectacles",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "もう",
      "kana": "もう",
      "primary": "already",
      "secondary": "anymore",
      "pos": "adv, int, uk",
      "": ""
    },
    {
      "kanji": "もう",
      "kana": "もう",
      "primary": "soon",
      "secondary": "shortly",
      "pos": "adv, int, uk",
      "": ""
    },
    {
      "kanji": "もう",
      "kana": "もう",
      "primary": "more",
      "secondary": "further, other, again",
      "pos": "adv, int, uk",
      "": ""
    },
    {
      "kanji": "もう一度",
      "kana": "もういちど",
      "primary": "again",
      "secondary": "once more",
      "pos": "exp",
      "": ""
    },
    {
      "kanji": "木曜日",
      "kana": "もくようび",
      "primary": "Thursday",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "もちろん",
      "kana": "もちろん",
      "primary": "of course",
      "secondary": "certainly, naturally",
      "pos": "adv, uk",
      "": ""
    },
    {
      "kanji": "持つ",
      "kana": "もつ",
      "primary": "to hold",
      "secondary": "to carry",
      "pos": "v5t",
      "": ""
    },
    {
      "kanji": "持つ",
      "kana": "もつ",
      "primary": "to possess",
      "secondary": "",
      "pos": "v5t",
      "": ""
    },
    {
      "kanji": "もっと",
      "kana": "もっと",
      "primary": "more",
      "secondary": "even more, longer, further",
      "pos": "adv",
      "": ""
    },
    {
      "kanji": "物",
      "kana": "もの",
      "primary": "thing",
      "secondary": "object",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "門",
      "kana": "もん",
      "primary": "gate",
      "secondary": "",
      "pos": "n, n-suf",
      "": ""
    },
    {
      "kanji": "問題",
      "kana": "もんだい",
      "primary": "problem",
      "secondary": "question",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "八百屋",
      "kana": "やおや",
      "primary": "greengrocer",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "野菜",
      "kana": "やさい",
      "primary": "vegetable",
      "secondary": "",
      "pos": "n,adj-no",
      "": ""
    },
    {
      "kanji": "易しい",
      "kana": "やさしい",
      "primary": "easy",
      "secondary": "plain, simple",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "安い",
      "kana": "やすい",
      "primary": "cheap",
      "secondary": "inexpensive",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "休み",
      "kana": "やすみ",
      "primary": "rest",
      "secondary": "recess, respite",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "休み",
      "kana": "やすみ",
      "primary": "vacation",
      "secondary": "holiday, absence, suspension",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "休む",
      "kana": "やすむ",
      "primary": "to rest",
      "secondary": "to have a break",
      "pos": "v5m, vi",
      "": ""
    },
    {
      "kanji": "休む",
      "kana": "やすむ",
      "primary": "to be absent",
      "secondary": "to take a day off",
      "pos": "v5m, vi",
      "": ""
    },
    {
      "kanji": "八つ",
      "kana": "やっつ",
      "primary": "eight",
      "secondary": "",
      "pos": "num",
      "": ""
    },
    {
      "kanji": "山",
      "kana": "やま",
      "primary": "mountain",
      "secondary": "hill",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "やる",
      "kana": "やる",
      "primary": "to do",
      "secondary": "",
      "pos": "v5r,vt, uk, col",
      "": ""
    },
    {
      "kanji": "夕方",
      "kana": "ゆうがた",
      "primary": "evening",
      "secondary": "dusk",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "夕飯",
      "kana": "ゆうはん",
      "primary": "dinner",
      "secondary": "evening meal",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "郵便局",
      "kana": "ゆうびんきょく",
      "primary": "post office",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "昨夜",
      "kana": "ゆうべ",
      "primary": "last night",
      "secondary": "",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "有名",
      "kana": "ゆうめい",
      "primary": "famous",
      "secondary": "",
      "pos": "Adj-na",
      "": ""
    },
    {
      "kanji": "有名",
      "kana": "ゆうめい",
      "primary": "fame",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "雪",
      "kana": "ゆき",
      "primary": "snow",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "ゆっくりと",
      "kana": "ゆっくりと",
      "primary": "slowly",
      "secondary": "at ease, restful",
      "pos": "adv,n,vs,adv-to",
      "": ""
    },
    {
      "kanji": "八日",
      "kana": "ようか",
      "primary": "eight days",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "八日",
      "kana": "ようか",
      "primary": "(the) eighth day (of the month)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "洋服",
      "kana": "ようふく",
      "primary": "western-style clothes",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "よく",
      "kana": "よく",
      "primary": "well",
      "secondary": "nicely, properly, skillfully",
      "pos": "adv, uk",
      "": ""
    },
    {
      "kanji": "よく",
      "kana": "よく",
      "primary": "often",
      "secondary": "frequently",
      "pos": "adv, uk",
      "": ""
    },
    {
      "kanji": "横",
      "kana": "よこ",
      "primary": "horizontal (as opposed to vertical)",
      "secondary": "lying down",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "横",
      "kana": "よこ",
      "primary": "width",
      "secondary": "breadth, side-to-side",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "横",
      "kana": "よこ",
      "primary": "side (of a box, etc...)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "横",
      "kana": "よこ",
      "primary": "beside",
      "secondary": "aside, next to",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "四日",
      "kana": "よっか",
      "primary": "four days",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "四日",
      "kana": "よっか",
      "primary": "(the) fourth day (of the month)",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "四つ",
      "kana": "よっつ",
      "primary": "four",
      "secondary": "",
      "pos": "num",
      "": ""
    },
    {
      "kanji": "呼ぶ",
      "kana": "よぶ",
      "primary": "to call out",
      "secondary": "to call, to invoke",
      "pos": "v5b, vt",
      "": ""
    },
    {
      "kanji": "呼ぶ",
      "kana": "よぶ",
      "primary": "to summon (a doctor, etc..)",
      "secondary": "",
      "pos": "v5b, vt",
      "": ""
    },
    {
      "kanji": "呼ぶ",
      "kana": "よぶ",
      "primary": "to invite",
      "secondary": "",
      "pos": "v5b, vt",
      "": ""
    },
    {
      "kanji": "読む",
      "kana": "よむ",
      "primary": "to read",
      "secondary": "",
      "pos": "v5m, vt",
      "": ""
    },
    {
      "kanji": "夜",
      "kana": "よる",
      "primary": "evening",
      "secondary": "night",
      "pos": "N-adv, n-t",
      "": ""
    },
    {
      "kanji": "弱い",
      "kana": "よわい",
      "primary": "weak",
      "secondary": "frail, delicate, tender, unskilled, weak (wine)",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "来月",
      "kana": "らいげつ",
      "primary": "next month",
      "secondary": "",
      "pos": "n-adv,n-t",
      "": ""
    },
    {
      "kanji": "来週",
      "kana": "らいしゅう",
      "primary": "next week",
      "secondary": "",
      "pos": "n-adv,n-t",
      "": ""
    },
    {
      "kanji": "来年",
      "kana": "らいねん",
      "primary": "next year",
      "secondary": "",
      "pos": "n-adv,n-t",
      "": ""
    },
    {
      "kanji": "ラジオ",
      "kana": "ラジオ",
      "primary": "radio",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "ラジカセ / ラジオカセット",
      "kana": "ラジカセ / ラジオカセット",
      "primary": "radio cassette player",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "立派",
      "kana": "りっぱ",
      "primary": "splendid",
      "secondary": "fine, handsome, elegant, imposing, prominent, legal, legitimate",
      "pos": "Adj-na, n",
      "": ""
    },
    {
      "kanji": "留学生",
      "kana": "りゅうがくせい",
      "primary": "overseas student",
      "secondary": "exchange student",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "両親",
      "kana": "りょうしん",
      "primary": "both parents",
      "secondary": "parents",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "料理",
      "kana": "りょうり",
      "primary": "cuisine",
      "secondary": "cooking, cookery",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "旅行",
      "kana": "りょこう",
      "primary": "travel",
      "secondary": "trip",
      "pos": "n, vs, adj-no",
      "": ""
    },
    {
      "kanji": "零",
      "kana": "れい",
      "primary": "zero",
      "secondary": "nought",
      "pos": "n, adj-no",
      "": ""
    },
    {
      "kanji": "冷蔵庫",
      "kana": "れいぞうこ",
      "primary": "refrigerator",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "レコード",
      "kana": "レコード",
      "primary": "record",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "レストラン",
      "kana": "レストラン",
      "primary": "restaurant",
      "secondary": "",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "練習",
      "kana": "れんしゅう",
      "primary": "practice",
      "secondary": "",
      "pos": "n, vs",
      "": ""
    },
    {
      "kanji": "廊下",
      "kana": "ろうか",
      "primary": "corridor",
      "secondary": "hallway, passageway",
      "pos": "n",
      "": ""
    },
    {
      "kanji": "六",
      "kana": "ろく",
      "primary": "six",
      "secondary": "",
      "pos": "num",
      "": ""
    },
    {
      "kanji": "ワイシャツ",
      "kana": "ワイシャツ",
      "primary": "business shirt",
      "secondary": "shirt, dress shirt",
      "pos": "n, uk, abbr",
      "": ""
    },
    {
      "kanji": "若い",
      "kana": "わかい",
      "primary": "young",
      "secondary": "",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "分かる",
      "kana": "わかる",
      "primary": "to be understood",
      "secondary": "to be comprehended, to be grasped",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "忘れる",
      "kana": "わすれる",
      "primary": "to forget",
      "secondary": "to leave carelessly, to be forgetful of, to forget about, to forget (an article)",
      "pos": "v1, vt",
      "": ""
    },
    {
      "kanji": "私",
      "kana": "わたくし",
      "primary": "(humble) I,myself",
      "secondary": "",
      "pos": "pn,adj-no",
      "": ""
    },
    {
      "kanji": "私",
      "kana": "わたし",
      "primary": "I,myself",
      "secondary": "",
      "pos": "pn,adj-no",
      "": ""
    },
    {
      "kanji": "渡す",
      "kana": "わたす",
      "primary": "to hand over",
      "secondary": "to hand in, to pass, to give, to transfer",
      "pos": "v5s,vt",
      "": ""
    },
    {
      "kanji": "渡す",
      "kana": "わたす",
      "primary": "to traverse",
      "secondary": "to ferry across (a river, etc...), to carry across",
      "pos": "v5s,vt",
      "": ""
    },
    {
      "kanji": "渡る",
      "kana": "わたる",
      "primary": "to go across",
      "secondary": "to cross over",
      "pos": "v5r, vi",
      "": ""
    },
    {
      "kanji": "悪い",
      "kana": "わるい",
      "primary": "bad",
      "secondary": "poor, inferior",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "悪い",
      "kana": "わるい",
      "primary": "evil",
      "secondary": "sinful",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "悪い",
      "kana": "わるい",
      "primary": "unprofitable",
      "secondary": "unbeneficial",
      "pos": "Adj-i",
      "": ""
    },
    {
      "kanji": "より",
      "kana": "より",
      "primary": "than (used for comparison)",
      "secondary": "",
      "pos": "adv, prt",
      "": ""
    },
    {
      "kanji": "ほう",
      "kana": "ほう",
      "primary": "one side (of a comparison)",
      "secondary": "",
      "pos": "adv, prt",
      "": ""
    }
  ]
  export const shuffleKanji = shuffle(kanji)