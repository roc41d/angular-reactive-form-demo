import { Component } from "@angular/core";

@Component({
    selector: "app-footer",
    standalone: true,
    template: `
    <footer class="footer">
        <div class="container-fluid">
            <span class="text-muted"><a href="{{blogPostUrl}}">Blog post</a> | <a href="{{githubRepoUrl}}">Github repo</a></span>
        </div>
    </footer>
    `,
    styles: `
        .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 60px;
        line-height: 60px;
        background-color: #f5f5f5;
    }
    `
})
export class FooterComponent {
    blogPostUrl = 'https://';
    githubRepoUrl = 'https://';
}