import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { IconsContainerComponent } from "./icons-container/icons-container.component";
import { LinkCopierComponent } from "./link-copier/link-copier.component";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
	standalone: true,
	imports: [CommonModule, IconsContainerComponent, LinkCopierComponent],
})
export class AppComponent {
	title = "share-card";
}

