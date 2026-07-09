export default function StatsSection() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      <div>
        <h3 className="text-white text-4xl font-bold">
          7,434
        </h3>
        <p className="text-blue-200 mt-2">
          Tweets Dataset
        </p>
      </div>

      <div>
        <h3 className="text-white text-4xl font-bold">
          84.17%
        </h3>
        <p className="text-blue-200 mt-2">
          Accuracy
        </p>
      </div>

      <div>
        <h3 className="text-white text-4xl font-bold">
          BiLSTM
        </h3>
        <p className="text-blue-200 mt-2">
          Deep Learning
        </p>
      </div>

      <div>
        <h3 className="text-white text-4xl font-bold">
          FastText
        </h3>
        <p className="text-blue-200 mt-2">
          Embedding
        </p>
      </div>

    </div>
  );
}