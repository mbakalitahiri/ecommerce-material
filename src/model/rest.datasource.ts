import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { Order } from "./order.model";
import { Product } from './product.model';

const PROTOCOL = "http";
const PORT = 3000;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token!: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://localhost:${PORT}/api/v1/`;
  }
  /*************************************************************/
  /********************* Products ******************************/
  /*************************************************************/
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl + "products");
  }

  getOProductById(id: number): Observable<any> {
     return this.http
       .get<Product>(this.baseUrl + `product/${id}`, this.getOptions())

  }
  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      this.baseUrl + "products",
      product,
      this.getOptions()
    );
  }
  updateProduct(product: any): Observable<Product> {
    console.log("producto acualizado", product)
     return this.http.put<Product>(`http://localhost:3000/api/v1/product/${product.productCode}`,  product,
      this.getOptions()
    )
  }
  deleteProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(
      `${this.baseUrl}products/${id}`,
      this.getOptions()
    );
  }

  /*************************************************************/
  /*********************** Orders ******************************/
  /*************************************************************/

  saveOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(this.baseUrl + "orders", order);
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl + "orders", this.getOptions());
  }

  getOrderById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + `orders/${id}`, this.getOptions());
  }

  deleteOrder(id: number): Observable<Order> {
    return this.http.delete<Order>(
      `${this.baseUrl}orders/${id}`,
      this.getOptions()
    );
  }
  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(
      `${this.baseUrl}orders/${order.id}`,
      order,
      this.getOptions()
    );
  }

  /*************************************************************/
  /********************* Authentication ************************/
  /*************************************************************/

  authenticate(user: string, pass: string) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    let options = {
      headers: headers,
    };
    const body = { username: user, password: pass };
    return this.http.post<any>(this.baseUrl + "login", body, options).pipe(
      map((response: any) => {
        this.auth_token = response.success ? response.token : null;
        console.log(this.auth_token);
        return response.success;
      })
    );
  }
  private getOptions() {
    return {
      headers: new HttpHeaders({
        Authorization: `Bearer<${this.auth_token}>`,
      }),
    };
  }
}
