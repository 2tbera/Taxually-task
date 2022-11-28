import {createAction, props} from '@ngrx/store';
import { album } from "../../../core/models/album.model";

export enum AlbumActionsTypes {
  createAlbum = '[ALBUM] create Album',
  createAlbumSuccess = '[ALBUM] create Album Success',
  removeAlbum = '[ALBUM] remove Album',
  removeAlbumSuccess = '[ALBUM] remove Album Success',
  getAlbum = '[ALBUM] get Album',
  getAlbumSuccess = '[ALBUM] get Album Success',
}

export const createAlbum = createAction(AlbumActionsTypes.createAlbum, props<{name: string}>());
export const createAlbumSuccess = createAction(AlbumActionsTypes.createAlbumSuccess, props<{album: album}>());
export const removeAlbum = createAction(AlbumActionsTypes.removeAlbum, props<{id: string}>());
export const removeAlbumSuccess = createAction(AlbumActionsTypes.removeAlbumSuccess, props);
export const getAlbum = createAction(AlbumActionsTypes.getAlbum, props<{id: string}>());
export const getAlbumSuccess = createAction(AlbumActionsTypes.getAlbumSuccess, props<{ albums: album[] }>());
