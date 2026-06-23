    export function getRecord<T>(
  dataset: { key: string; value: T }[],
  key: string
): T {

  const record = dataset.find(
    r => r.key === key
  );

  if (!record) {
    throw new Error(
      `Record ${key} not found`
    );
  }

  return record.value;
}