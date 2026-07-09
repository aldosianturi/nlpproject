export const statsData = [
  {
    title: "Total Tweets",
    value: "7,434",
    subtitle: "Collected & Preprocessed",
    color: "blue",
  },
  {
    title: "Hate Speech",
    value: "3,131",
    subtitle: "42.1% of Dataset",
    color: "red",
  },
  {
    title: "Non Hate Speech",
    value: "4,303",
    subtitle: "57.9% of Dataset",
    color: "green",
  },
  {
    title: "Model Accuracy",
    value: "84.17%",
    subtitle: "BiLSTM + FastText",
    color: "purple",
  },
];

export const labelDistribution = [
  {
    name: "Hate Speech",
    value: 3131,
  },
  {
    name: "Non Hate Speech",
    value: 4303,
  },
];

export const categoryData = [
  {
    name: "Religion",
    value: 620,
  },
  {
    name: "Race",
    value: 570,
  },
  {
    name: "Physical",
    value: 690,
  },
  {
    name: "Gender",
    value: 540,
  },
  {
    name: "Other",
    value: 711,
  },
];

export const targetData = [
  {
    name: "Individual",
    value: 1750,
  },
  {
    name: "Group",
    value: 1381,
  },
];

export const hateWords = [
  "kafir",
  "anjing",
  "babi",
  "bangsat",
  "goblok",
  "tolol",
  "bodoh",
  "rasis",
  "pengkhianat",
  "asing",
  "sesat",
  "maling",
  "fitnah",
  "hina",
  "jahat",
  "brengsek",
  "kampungan",
  "biadab",
  "laknat",
  "musnah",
];

export const nonHateWords = [
  "indonesia",
  "masyarakat",
  "pendidikan",
  "budaya",
  "damai",
  "toleransi",
  "persatuan",
  "gotong",
  "royong",
  "bangsa",
  "keadilan",
  "kebaikan",
  "harmoni",
  "keluarga",
  "semangat",
  "nasional",
  "cinta",
  "bhinneka",
  "bersama",
  "sejahtera",
];

export const lstmMetrics = [
  { metric: "Accuracy", value: 83.36 },
  { metric: "Precision", value: 81.05 },
  { metric: "Recall", value: 79.23 },
  { metric: "F1-Score", value: 80.13 },
];

export const bilstmMetrics = [
  { metric: "Accuracy", value: 84.17 },
  { metric: "Precision", value: 84.03 },
  { metric: "Recall", value: 77.32 },
  { metric: "F1-Score", value: 80.53 },
];

export const radarData = [
  {
    metric: "Accuracy",
    LSTM: 83.36,
    BiLSTM: 84.17,
  },
  {
    metric: "Precision",
    LSTM: 81.05,
    BiLSTM: 84.03,
  },
  {
    metric: "Recall",
    LSTM: 79.23,
    BiLSTM: 77.32,
  },
  {
    metric: "F1",
    LSTM: 80.13,
    BiLSTM: 80.53,
  },
];