
type CacheItem<T> = {
  data: T;
  timestamp: number;
  expiry: number; // in milliseconds
};

class CacheManager {
  private cache: Map<string, CacheItem<any>> = new Map();
  
  /**
   * Set an item in the cache
   * @param key The cache key
   * @param data The data to cache
   * @param expiry Time in milliseconds until cache expires (defaults to 5 minutes)
   */
  set<T>(key: string, data: T, expiry: number = 5 * 60 * 1000): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      expiry
    });
  }
  
  /**
   * Get an item from the cache
   * @param key The cache key
   * @returns The cached data or null if not found or expired
   */
  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    // Return null if item doesn't exist
    if (!item) return null;
    
    // Check if item has expired
    if (Date.now() > item.timestamp + item.expiry) {
      this.cache.delete(key);
      return null;
    }
    
    return item.data as T;
  }
  
  /**
   * Check if a key exists in the cache and is not expired
   * @param key The cache key
   * @returns Boolean indicating if valid cache exists
   */
  has(key: string): boolean {
    const item = this.cache.get(key);
    if (!item) return false;
    
    if (Date.now() > item.timestamp + item.expiry) {
      this.cache.delete(key);
      return false;
    }
    
    return true;
  }
  
  /**
   * Remove an item from the cache
   * @param key The cache key
   */
  remove(key: string): void {
    this.cache.delete(key);
  }
  
  /**
   * Clear all items from the cache
   */
  clear(): void {
    this.cache.clear();
  }
}

// Export a singleton instance
export const cacheManager = new CacheManager();
