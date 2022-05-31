import {
    //
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "user" })
export class User {
    @PrimaryGeneratedColumn()
    public id?: string;

    @Column({ name: "name" })
    public name?: string;

    @CreateDateColumn({ name: "created" })
    public created?: Date;

    @UpdateDateColumn({ name: "updated" })
    public updated?: Date;

    @OneToMany(() => Post, (post) => post.userId)
    public posts?: Post[];
}

@Entity({ name: "user_post" })
export class Post {
    @PrimaryGeneratedColumn()
    public id?: string;

    @Column({ name: "user_id" })
    public userId!: string;

    @Column({ name: "title" })
    public title?: string;

    @CreateDateColumn({ name: "created" })
    public created?: Date;

    @UpdateDateColumn({ name: "updated" })
    public updated?: Date;

    @ManyToOne(() => User, (user) => user.posts)
    @JoinColumn({
        name: "user_id",
        referencedColumnName: "id",
    })
    public user?: User;
}
