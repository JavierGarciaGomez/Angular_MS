import { Component, OnInit } from "@angular/core";
import { interval, Observable } from "rxjs";
import { Subscription } from "rxjs/Subscription";
import { filter, map } from "rxjs/operators";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor() {}
  private firstObsSuscription: Subscription;
  count;

  ngOnInit() {
    // this.firstObsSuscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 10) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error("Count is greater 3!"));
        }
        count++;
      }, 1000);
    });

    this.firstObsSuscription = customIntervalObservable
      .pipe(
        filter((data) => {
          return data > 0;
        }),
        map((data: number) => {
          return "Round: " + (data + 1);
        })
      )
      .subscribe(
        (data) => {
          this.count = data;
        },
        (error) => {
          console.log(error);
        },
        () => {
          console.log("Completed!");
        }
      );
  }

  ngOnDestroy(): void {
    // this.firstObsSuscription.unsubscribe();
  }
}
