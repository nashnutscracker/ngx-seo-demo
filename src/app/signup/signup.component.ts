import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LinksConfigConst } from '../../configuration/link-configuration.const';
import { Meta, Title } from '@angular/platform-browser';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  linkConfigObj = LinksConfigConst;

  constructor(private router: Router, private route: ActivatedRoute, private title: Title, private meta: Meta) { }

  ngOnInit() {
    this.title.setTitle('Sign Up');
    this.meta.updateTag({ name: 'title', content: 'Sign Up' });
    this.meta.updateTag({ name: 'description', content: 'Sign-Up Page' });
  }

}
