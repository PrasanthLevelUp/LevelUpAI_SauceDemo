/**
 * Generated test-data module — sourced from the LevelUp Test Data Store.
 *
 * Datasets: valid_users
 *
 * Generated specs bind to DATASET NAMES + SCHEMA and resolve a concrete record
 * at runtime via getRecord(), so they keep working as the underlying data
 * changes. Regenerate from the Test Data Store rather than editing by hand.
 */

export interface DataRecord {
  /** The record's key within its dataset (e.g. "standard_user"). */
  key: string;
  username?: string;
  password?: string;
  /** Optional classification tags from the Test Data Store. */
  tags?: string[];
  [field: string]: unknown;
}

/** Selector for resolving one record from a dataset (late-bound). */
export type RecordSelector =
  | string                                   // match by record key
  | number                                   // match by index
  | { tag: string }                          // first record carrying a tag
  | { where: (r: DataRecord) => boolean };   // first record matching a predicate

/** All datasets, keyed by name → ordered list of records (schema-first). */
const datasets: Record<string, DataRecord[]> = {
  "valid_users": [
    {
      "key": "standard_user",
      "username": "standard_user"
    },
    {
      "key": "locked_out_user",
      "username": "locked_out_user"
    }
  ]
};

/** Return every record in a dataset (its full schema/rows). */
export function getDataset(name: string): DataRecord[] {
  const ds = datasets[name];
  if (!ds) throw new Error('Unknown dataset: ' + name);
  return ds;
}

/**
 * Resolve ONE record from a dataset. Selection is intentionally late-bound so
 * the generated script keeps working as records are added/changed:
 *   - no selector → the first record (a representative row)
 *   - string      → match by record key
 *   - number      → match by index
 *   - { tag }     → first record carrying that tag
 *   - { where }   → first record matching a predicate
 */
export function getRecord(name: string, selector?: RecordSelector): DataRecord {
  const ds = getDataset(name);
  let rec: DataRecord | undefined;
  if (selector == null) rec = ds[0];
  else if (typeof selector === 'number') rec = ds[selector];
  else if (typeof selector === 'string') rec = ds.find(r => r.key === selector);
  else if ('tag' in selector) rec = ds.find(r => (r.tags ?? []).includes(selector.tag));
  else rec = ds.find(selector.where);
  if (!rec) throw new Error('No record in dataset "' + name + '" for selector ' + JSON.stringify(selector));
  // Secrets (e.g. passwords) are kept out of the data file as a placeholder
  // (null) and resolved at runtime from the environment. Fill the password
  // from SAUCE_PASSWORD when the record carries no concrete value.
  if (rec.password == null && process.env.SAUCE_PASSWORD) {
    rec = { ...rec, password: process.env.SAUCE_PASSWORD };
  }
  return rec;
}

export const validUsers = datasets["valid_users"] ?? [];

/** Flat object view, e.g. `testData.valid_users[0]`. */
export const testData = datasets;

export default datasets;