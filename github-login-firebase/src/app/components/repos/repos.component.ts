import {
  Component,
  OnInit,
  OnChanges,
  ChangeDetectorRef,
  Input,
} from '@angular/core';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit, OnChanges {
  @Input()
  repoUrl!: string;

  repos: [] = [];

  constructor(
    private githubService: GithubService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnChanges() {
    if (this.repoUrl) {
      this.githubService.getRepos(this.repoUrl).subscribe(
        (repos: any) => {
          this.repos = repos;

          this.changeDetectorRef.detectChanges();
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  ngOnInit(): void {}
}
