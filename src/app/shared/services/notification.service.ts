import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVICE } from '@shared/constants/gateway-routes-api.constant';
import { INotification } from '@shared/models/notification.model';
import { Observable } from 'rxjs';
import { AbstractService, EntityResponseType } from './common/abstract.service';

@Injectable({
  providedIn: 'root',
})
export class NotificationService extends AbstractService {
  public resourceUrl = SERVICE.NOTIFICATION + '/me/notifications';
  public resourceDeviceUrl = SERVICE.NOTIFICATION + '/devices';
  public resourceEventUrl = SERVICE.NOTIFICATION + '/events';

  constructor(protected http: HttpClient) {
    super(http);
  }

  search(
    params?: any,
    loading = false
  ): Observable<EntityResponseType<INotification[]>> {
    return super.get<INotification[]>(`${this.resourceEventUrl}`, {
      params,
      loading,
    });
  }

  searchMe(
    params?: any,
    loading = false
  ): Observable<EntityResponseType<INotification[]>> {
    return super.get<INotification[]>(`${this.resourceUrl}`, {
      params,
      ignoreError: true,
      loading,
    });
  }

  find(id: any, loading = true): Observable<EntityResponseType<INotification>> {
    return super.get<INotification>(`${this.resourceEventUrl}/${id}`, {
      loading,
    });
  }

  findByIdMe(
    id: any,
    loading = true
  ): Observable<EntityResponseType<INotification>> {
    return super.get<INotification>(`${this.resourceUrl}/${id}`, {
      loading,
    });
  }

  // create(
  //   body: NotificationRequest,
  //   loading = true
  // ): Observable<EntityResponseType<INotification>> {
  //   return super.post<INotification>(`${this.resourceEventUrl}`, body, {
  //     loading,
  //   });
  // }

  // update(
  //   body: NotificationRequest,
  //   id: any,
  //   loading = true
  // ): Observable<EntityResponseType<INotification>> {
  //   return super.post<INotification>(
  //     `${this.resourceEventUrl}/${id}/update`,
  //     body,
  //     { loading }
  //   );
  // }

  delete(
    id: any,
    loading = true
  ): Observable<EntityResponseType<INotification>> {
    return super.post<INotification>(`${this.resourceEventUrl}/${id}/delete`, {
      loading,
    });
  }

  send(id: any, loading = true): Observable<EntityResponseType<INotification>> {
    return super.post<INotification>(
      `${this.resourceEventUrl}/${id}/send`,
      {},
      { loading }
    );
  }

  cancel(
    id: any,
    loading = true
  ): Observable<EntityResponseType<INotification>> {
    return super.post<INotification>(
      `${this.resourceEventUrl}/${id}/cancel`,
      {},
      { loading }
    );
  }

  getUrlJoinTelegramBot(): Observable<EntityResponseType<string>> {
    return super.get<string>(`${this.resourceUrl}/url-join-telegram-bot`);
  }
}
