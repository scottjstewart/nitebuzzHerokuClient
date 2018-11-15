import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: "app-comment.dialog",
  templateUrl: "./comment.dialog.component.html",
  styleUrls: ["./comment.dialog.component.css"]
})
export class CommentDialogComponent implements OnInit {
  id: number;
  title: string;
  form: FormGroup;
  original: string;
  update: boolean = false
  old: string

  constructor(
    private fb: FormBuilder,
    private ref: MatDialogRef<CommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.id = data.id;
    this.title = data.title;
    this.original = data.original;
    data.update ? this.update = data.update : this.update = false
    data.old ? this.old = data.old : this.old = ''
  }

  ngOnInit() {
    this.form = this.fb.group({
      comment: new FormControl(),
      id: new FormControl()
    });
  }

  submit() {
    return this.ref.close(this.form.value)
  }

  close() {
    this.ref.close();
  }

  updateComment() {
    return this.ref.close(this.form.value)
  }
}
