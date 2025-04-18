import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { supabase } from '../supabase';

@Injectable({ providedIn: 'root' })
export class ProductService {
  async getProducts(): Promise<Product[]> {
    const { data, error } = await supabase.from('products').select('*');
    console.log('📦 data from Supabase:', data);
    console.log('❗ error from Supabase:', error);
    if (error) {
      return [];
    }
    return data as Product[];
  }

}
