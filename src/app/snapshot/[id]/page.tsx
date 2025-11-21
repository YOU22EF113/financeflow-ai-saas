export default function SnapshotDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Snapshot Details</h1>

      <p className="text-gray-700 mb-4">
        Snapshot ID: <span className="font-mono">{params.id}</span>
      </p>

      <p className="text-gray-600">
        The AI-generated financial report will go here soon.
      </p>
    </div>
  );
}
