// File: src/lib/suspendCache.js
// ESM-compatible cache helper for React-Three-Fiber + Vite.
// Prevents GLTF reloading and flicker between views.

const cache = new Map();

/**
 * Suspends a Promise-based resource until it resolves.
 */
export function suspend(loaderFunc, args) {
  const key = JSON.stringify(args);
  if (!cache.has(key)) {
    const promise = loaderFunc(...args);
    const entry = { status: 'pending', promise };
    cache.set(key, entry);
    promise.then(
      (value) => (entry.status = 'success', entry.value = value),
      (error) => (entry.status = 'error', entry.error = error)
    );
  }

  const entry = cache.get(key);
  if (entry.status === 'success') return entry.value;
  if (entry.status === 'error') throw entry.error;
  throw entry.promise;
}

/**
 * Preloads a resource before rendering to avoid flicker.
 */
export function preload(loaderFunc, args) {
  const key = JSON.stringify(args);
  if (!cache.has(key)) {
    const promise = loaderFunc(...args);
    const entry = { status: 'pending', promise };
    cache.set(key, entry);
    promise.then(
      (value) => (entry.status = 'success', entry.value = value),
      (error) => (entry.status = 'error', entry.error = error)
    );
  }
}

/**
 * Peeks a cached entry without suspending.
 */
export function peek(args) {
  const key = JSON.stringify(args);
  return cache.get(key)?.value;
}

/**
 * Clears the cache entirely or a specific key.
 */
export function clear(args) {
  if (args) cache.delete(JSON.stringify(args));
  else cache.clear();
}
