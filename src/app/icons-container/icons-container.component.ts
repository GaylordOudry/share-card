import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconComponent } from "../icon/icon.component";

@Component({
	selector: "app-icons-container",
	standalone: true,
	imports: [CommonModule, IconComponent],
	templateUrl: "./icons-container.component.html",
	styleUrls: ["./icons-container.component.scss"],
})
export class IconsContainerComponent {}

