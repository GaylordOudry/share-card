import { Component, ElementRef, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-link-copier",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./link-copier.component.html",
	styleUrls: ["./link-copier.component.scss"],
})
export class LinkCopierComponent {
	@ViewChild("contentToCopy", { static: true }) contentToCopy!: ElementRef;

	copiedText: string = "Copy";

	copyToClipboard(): void {
		const textarea = document.createElement("textarea");
		textarea.style.position = "fixed";
		textarea.style.opacity = "0";
		textarea.value = this.contentToCopy.nativeElement.textContent;
		document.body.appendChild(textarea);
		textarea.select();
		document.execCommand("copy");
		document.body.removeChild(textarea);
		this.copiedText = "Copied !";
	}
}

