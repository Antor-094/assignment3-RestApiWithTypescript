/* eslint-disable @typescript-eslint/no-explicit-any */
import { SortOrder } from './course.interface';

export const allowedSortFields = [
  'title',
  'price',
  'startDate',
  'endDate',
  'language',
  'duration',
];
export const sortOptions: [string, SortOrder][] = [];
export const priceFilter: Record<string, any> = {};
export const tagFilter: Record<string, any> = {};
export const dateFilter: Record<string, any> = {};
