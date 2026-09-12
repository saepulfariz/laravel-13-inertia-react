<?php

namespace Tests\Feature;

use App\Models\Post;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class PostControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_view_post_index()
    {
        Post::factory()->count(3)->create();

        $response = $this->get('/posts');

        $response->assertStatus(200)
            ->assertInertia(
                fn(Assert $page) => $page
                    ->component('Posts/Index')
                    ->has('posts', 3)
            );
    }
}
